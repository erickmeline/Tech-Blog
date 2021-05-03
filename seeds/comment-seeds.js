const { Comment } = require('../models');

const commentData = [
  {
    comment_name: 'comment 1',
  },
  {
    comment_name: 'comment 2',
  },
  {
    comment_name: 'comment 3',
  }
];

const commentTags = () => Comment.bulkCreate(commentData);

module.exports = commentTags;
