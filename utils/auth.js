const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();logged_in
  }
};

module.exports = withAuth;
