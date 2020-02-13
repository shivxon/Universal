var express = require('express');
var router = express.Router();
var DetailsModel = require('../model/details')
    /* GET home page. */

router.get('/', function(req, res, next) {

    res.send('Success');
});
router.post('/newform', function(req, res, next) {

    var Details = new DetailsModel({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    Details.save();
    res.json({ message: 'Success' });
});

module.exports = router;