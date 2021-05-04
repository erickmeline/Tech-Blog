const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all blogs
router.get('/', (req, res) => {
  Blog.findAll({
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

// get one blog
router.get('/:id', (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

// create new blog
router.post('/', withAuth, (req, res) => {
  Blog.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update blog
router.put('/:id', withAuth, (req, res) => {
  Blog.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(response => {
      if (!response) {
        res.status(404).json({ message: `Blog not found with id ${req.params.id}` });
        return;
      }
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(response => {
      if (!response) {
        res.status(404).json({ message: `Blog not found with id ${req.params.id}` });
        return;
      }
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
