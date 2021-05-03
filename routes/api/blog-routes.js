const router = require('express').Router();
const { Blog, User, Comment, BlogComment } = require('../../models');

// get all blogs
router.get('/', (req, res) => {
  Blog.findAll({
    include: [
      User,
      {
        model: Comment,
        through: BlogComment
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
      User,
      {
        model: Comment,
        through: BlogComment
      }
    ]
  });
});

// create new blog
router.post('/', (req, res) => {
  Blog.create(req.body)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update blog
router.put('/:id', (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((blog) => {
      return BlogComment.findAll({ where: { blog_id: req.params.id } });
    })
    .then((blogComments) => {
      const productTagIds = blogComments.map(({ comment_id }) => comment_id);
      const newBlogComments = req.body.commentIds
        .filter((comment_id) => !blogCommentIds.includes(comment_id))
        .map((comment_id) => {
          return {
            blog_id: req.params.id,
            comment_id,
          };
        });
      const blogCommentsToRemove = blogComments
        .filter(({ comment_id }) => !req.body.commentIds.includes(comment_id))
        .map(({ id }) => id);
      return Promise.all([
        BlogComment.destroy({ where: { id: blogCommentsToRemove } }),
        BlogComment.bulkCreate(newBlogComments),
      ]);
    })
    .then((updatedBlogComment) => res.json(updatedBlogComments))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
