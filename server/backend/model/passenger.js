var mongoose = require("mongoose")


var Schema = mongoose.Schema;

var PassengerDetailSchema = new Schema({

    email: {
        type: String
    },
    customer_id: {
        type: String
    },
    token_id: {
        type: String
    },
    card_id: {
        type: String
    },
    charge_id: {
        type: String
    },

});




var PassengerModel = mongoose.model('Passengerdetails', PassengerDetailSchema)




module.exports = PassengerModel;