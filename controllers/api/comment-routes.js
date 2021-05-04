const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({}).then((response) => {
    res.status(200).json(response);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    }).then(response => {
      res.json(response)}).catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    if (!response) {
      res.status(404).json({ message: `Comment not found with id ${req.params.id}` });
      return;
    }
    res.status(200).json(response);
  });
});

module.exports = router;
