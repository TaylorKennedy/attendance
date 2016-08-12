const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'] });
});

module.exports = router;
