var mongoose = require("mongoose")
const emailvalidation = require('../services/users/emailandpasswordvalidation');

const passwordvalidation = require('../services/users/emailandpasswordvalidation');

var Schema = mongoose.Schema;

var SignupDetailSchema = new Schema({



    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [emailvalidation.validateEmailFormat, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: [passwordvalidation.validatePasswordFormat, 'Please fill a valid Password'],
    }

});




var SignupDetailsModel = mongoose.model('signupdetails', SignupDetailSchema)




module.exports = SignupDetailsModel;