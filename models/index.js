// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations

// User-Post relationship
User.hasMany(Post, {
  foreignKey: 'user_id',
});

//Post-User relationship
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// Comment-User relationship
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// Comment-Post relationship
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

// User-Comment relationsihp
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// Post-Comment relationship
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

// Export the modules
module.exports = { User, Post, Comment };
