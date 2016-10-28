const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('./users/index');
})

router.get('/login', (req, res) => {
  res.render('./users/login');
})

router.get('/signup', (req, res) => {
  res.render('./users/signup');
})


module.exports = router;
