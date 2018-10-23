const router = require('express').Router();

// match all requests to /api/users/
router.use('/users', require('./users'));


router.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});


module.exports = router;
