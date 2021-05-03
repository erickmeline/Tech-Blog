const { BlogComment } = require('../models');

const blogCommentData = [
  {
    blog_id: 1,
    comment_id: 1,
  },
  {
    blog_id: 1,
    comment_id: 2,
  },
  {
    blog_id: 1,
    comment_id: 3,
  }
];

const seedBlogComments = () => BlogComment.bulkCreate(blogCommentData);

module.exports = seedBlogComments;
