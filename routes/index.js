const express = require('express');
const router = express.Router();
const views = require('../handlers/app/views');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        tite : 'Angular Test'
    });
});

// router.get('/views/:views/partials/:partials', views.partials);
module.exports = router;
