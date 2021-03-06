const { Post } = require('../models');

const postData = [
  {
    title: 'some blog 1 title',
    content: 'some blog 1',
    user_id: 1,
  },
  {
    title: 'some blog 2 title',
    content: 'some blog 2',
    user_id: 2,
  },
  {
    title: 'some blog 3 title',
    content: 'some blog 3',
    user_id: 3,
  }
];

const seedBlogs = () => Post.bulkCreate(postData);

module.exports = seedBlogs;
