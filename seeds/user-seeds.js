const { User } = require('../models');

const userData = [
  {
    user_name: 'Erick',
    email: 'erickmeline@gmail.com'
  },
  {
    user_name: 'Tom',
    email: 'tom@email.com'
  },
  {
    user_name: 'Tracy',
    email: 'tracy@nowhere.com'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
