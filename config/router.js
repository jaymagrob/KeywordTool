const router = require('express').Router();
const search = require('../controllers/search');

router.route('/search/:query/')
  .get(search.find);

module.exports = router;
