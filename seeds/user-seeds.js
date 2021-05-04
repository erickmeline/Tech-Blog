const { User } = require('../models');

const userData = [
  {
    username: 'Erick',
    email: 'erickmeline@gmail.com'
  },
  {
    username: 'Tom',
    email: 'tom@email.com'
  },
  {
    username: 'Tracy',
    email: 'tracy@nowhere.com'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
