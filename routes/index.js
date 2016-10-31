// User template code was provided by instructors at General Assembly (https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes)
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('./index');
})

router.get('/login', (req, res) => {
  res.render('./login');
})

router.get('/signup', (req, res) => {
  res.render('./signup');
})


module.exports = router;
