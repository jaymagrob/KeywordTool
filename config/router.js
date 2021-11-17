const router = require('express').Router();
const search = require('../controllers/search');

router.route('/search')
  .get(search.find);

module.exports = router;
