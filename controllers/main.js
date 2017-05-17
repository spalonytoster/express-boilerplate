/* jshint node: true */
'use strict';
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('main', {
    title: 'Mikro FB',
    message: 'witam'
  });
});

module.exports = router;
