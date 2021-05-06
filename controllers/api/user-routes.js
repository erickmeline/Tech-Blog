const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] }
	}).then((response) => {
		res.status(200).json(response);
	});
});

router.get('/:id', (req, res) => {
	User.findOne({
		attributes: { exclude: ['password']},
		where: {
			id: req.params.id
		},
		include: [
			{
				model: Blog,
				attributes: ['id', 'title', 'blog_content', 'created_at']
			},
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'created_at'],
				include: {
					model: Blog,
					attributes: ['title']
				}
			}
		]
	}).then(response => {
		if (!response) {
			res.status(404).json({ message: `User not found with id ${req.params.id}` });
			return;
		}
		res.json(response);
	}).catch(err => {
		res.status(500).json(err);
	});
});

router.post("/", (req, res) => {console.log('=================== got here =============');
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((response) => {console.log('=================== got here =============');
      req.session.save(() => {
        req.session.user_id = response.id;
        req.session.username = response.username;
        req.session.logged_in = true;
        res.json(response);
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	}).then((response) => {
		if (!response) {
			res.status(400).json({ message: "User not found" });
			return;
		}
		const validPassword = response.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: "Incorrect Password!" });
			return;
		}
		req.session.save(() => {
			req.session.user_id = response.id;
			req.session.username = response.username;
			req.session.loggedIn = true;
			res.json({ user: response, message: "You are now logged in!" });
		});
	}).catch((err) => {
		res.status(500).json(err);
	});
});

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).render('homepage').end();
		});
	}
	else {
		res.status(404).render('homepage').end();
	}
});

module.exports = router;
