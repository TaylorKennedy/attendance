const express = require('express');
const router = express.Router();

const names = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

router.get('/', (req, res, next) => {
    res.render('names.ejs', {names: names});
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  names.push(name);
  res.redirect('/names');
});

module.exports = router;
