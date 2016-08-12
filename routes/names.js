const express = require('express');
const router = express.Router();

const names = {};

router.get('/', (req, res, next) => {
    res.render('names.ejs', {names: names});
});

router.post('/', (req, res, next) => {
  const name = req.body.name.trim();
  if (names[name]){
    names[name] += 1;
  }
  else{
    names[name] = 1;
  };
  //names.push(name);
  res.redirect('/names');
});

module.exports = router;
