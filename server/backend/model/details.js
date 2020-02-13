var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var Detailsschema = new Schema({

    title: String,

    companyhq: String,

    companyName: {
        type: String,
        unique: true

    },
    jobtype: {
        type: String,
    },
    state: {
        type: String,
    },
    jobdescription: {
        type: String,
    }


});


var DetailsModel = mongoose.model('details', Detailsschema)


module.exports = DetailsModel;