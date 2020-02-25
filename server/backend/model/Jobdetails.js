var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var JobDetailsschema = new Schema({

    jobTitle: {
        type: String,
        required: [true, 'Job Type is required']

    },

    category: {
        type: String,
        required: [true, 'Category is required']

    },
    jobType: {
        type: String,
        required: [true, 'Job Type is Required']
    },
    companyhq: {
        type: String,
        required: [true, 'Company HQ is required']

    },
    state: {
        type: String,
    },
    howtoapply: {

        type: String,
        required: [true, 'How to Apply is required']
    },
    jobdescription: {
        type: String,
        required: [true, 'Job Description is required']
    },
    companyName: {
        type: String,
        required: [true, 'Company Name is required']

    },
    companyStatement: {
        type: String,
    },
    companyWebsiteUrl: {
        type: String,
        required: [true, 'Company Website URL is required']

    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    companydescription: {
        type: String,
    }

});


var JobDetailsModel = mongoose.model('Jobdetails', JobDetailsschema)




module.exports = JobDetailsModel;