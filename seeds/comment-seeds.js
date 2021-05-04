const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: "Hooray for pants!"
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "I also like pants!"
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text: "pants are the best!"
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
