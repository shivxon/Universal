var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var JobDetailsschema = new Schema({

    jobTitle: {
        type: String,
        required: true

    },

    category: {
        type: String,
        required: true

    },
    jobType: {
        type: String,
        required: true
    },
    companyhq: {
        type: String,
        required: true

    },
    state: {
        type: String,
    },
    howtoapply: {

        type: String,
        required: true
    },
    jobdescription: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true

    },
    companyStatement: {
        type: String,
    },
    companyWebsiteUrl: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    companydescription: {
        type: String,
    }

});


var JobDetailsModel = mongoose.model('Jobdetails', JobDetailsschema)


module.exports = JobDetailsModel;