var express = require('express');
var router = express.Router();
const jobdetails = require('../controller/jobdetails')

router.get('/newform', function(req, res, next) {

    res.send('Success');
});
router.post('/newform', jobdetails.savejobdetails);


module.exports = router;