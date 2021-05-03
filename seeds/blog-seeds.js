const { Blog } = require('../models');

const blogData = [
  {
    blog_title: 'some blog 1 title',
    content: 'some blog 1',
    all_comments: 14,
    user_id: 1,
  },
  {
    blog_title: 'some blog 2 title',
    content: 'some blog 2',
    all_comments: 25,
    user_id: 2,
  },
  {
    blog_title: 'some blog 3 title',
    content: 'some blog 3',
    all_comments: 12,
    user_id: 3,
  }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
