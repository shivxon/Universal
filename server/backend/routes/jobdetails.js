var express = require('express');
var router = express.Router();
const jobdetails = require('../controller/jobdetails')
const driverdetails = require('../controller/stripeNewAccount')
const Passengerdetails = require('../controller/passengerctrl')
var multer = require('multer')
var path = require('path');


router.use(express.static(__dirname + "./"));

var storage = multer.memoryStorage({
    // destination: "./temp/uploads",
    //   filename: function(req, file, cb) {
    //         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    //     }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');





router.get('/newform', (req, res, next) => {

    res.send('Success');
});
router.post('/newform', jobdetails.savejobdetails);
router.post('/token_validate', jobdetails.VerifyCaptcha);
router.post('/stripeNewAccount', driverdetails.stripeNewAccount);
router.post('/stripeUpdateAccount', driverdetails.stripeAccountUpdate);
router.post('/stripeNewPersonAccount', upload, driverdetails.stripeAccountPerson);

router.post('/create_passenger', Passengerdetails.PassengerAccount);
router.post('/card_token', Passengerdetails.PassengerCustomerSource);
router.post('/make_payment', Passengerdetails.PassengerCharge);
router.post('/webhooks', Passengerdetails.PassengeWebHooks);

router.post('/get_payout', Passengerdetails.PassengerPayout);

















router.post('/stripeIdentityUploads', upload, (req, res, next) => {

    console.log(req.file)

});




module.exports = router;