const { User } = require('../models');

const userData = [
  {
    username: 'Erick',
    email: 'erickmeline@gmail.com',
    password: 1234
  },
  {
    username: 'Tom',
    email: 'tom@email.com',
    password: 1234
  },
  {
    username: 'Tracy',
    email: 'tracy@nowhere.com',
    password: 1234
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
