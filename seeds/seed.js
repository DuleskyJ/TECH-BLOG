const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123'
  },
  {
    username: 'jane_doe',
    password: 'password123'
  }
];

const postData = [
  {
    title: 'My first blog post',
    content: 'This is the content of my first blog post.',
    user_id: 1
  },
  {
    title: 'Another blog post',
    content: 'This is some more content for another blog post.',
    user_id: 2
  }
];

const commentData = [
  {
    comment_text: 'Great post!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Very informative.',
    user_id: 2,
    post_id: 2
  }
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();