var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var Detailsschema = new Schema({

    fullName: String,

    phone: Number,

    email: {
        type: String,
        unique: true

    },
    address: {
        type: String,


    }

});


var DetailsModel = mongoose.model('details', Detailsschema)


module.exports = DetailsModel;