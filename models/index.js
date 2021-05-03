// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// Blogs belongsTo Users
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});
// Users have many Blogs
User.hasMany(Blog, {
  foreignKey: 'user_id'
});
// Blogs have Many Comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id'
});
// User have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
// Comments belongTo Blogs
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});
// Comments belongTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
  Blog,
  User,
  Comment
};
