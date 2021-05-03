const router = require('express').Router();
const { User, Blog } = require('../../models');

router.get('/', (req, res) => {
  User.findAll({
    include: [
      Blog
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Blog
    ]
  });
});

router.post('/', (req, res) => {
  User.create(req.body).then((response) => {
    res.status(200).json(response);
  });
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
