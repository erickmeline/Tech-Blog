const router = require('express').Router();
const { Comment, Blog, BlogComment } = require('../../models');

router.get('/', (req, res) => {
  Comment.findAll({
    include: [
      {
        model: Blog,
        through: BlogComment
      }
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Blog,
        through: BlogComment
      }
    ]
  });
});

router.post('/', (req, res) => {
  Comment.create(req.body).then((response) => {
    res.status(200).json(response);
  });
});

router.put('/:id', (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
