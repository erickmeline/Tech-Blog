// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');
const BlogComment = require('./BlogComment');

// Blogs belongsTo Users
Blog.belongsTo(User, {
  foreignKey: 'user_id'
})
// Users have many Blogs
User.hasMany(Blog, {
  foreignKey: 'user_id'
})
// Blogs belongToMany Comments (through BlogComment)
Blog.belongsToMany(Comment, {
  foreignKey: 'blog_id',
  through: BlogComment
})
// Comments belongToMany Blogs (through BlogComment)
Comment.belongsToMany(Blog, {
  foreignKey: 'comment_id',
  through: BlogComment
})

module.exports = {
  Blog,
  User,
  Comment,
  BlogComment,
};
