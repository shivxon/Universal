var mongoose = require("mongoose")


var Schema = mongoose.Schema;

var DriverDetailSchema = new Schema({

    email: {
        type: String
    },
    account_id: {
        type: String
    },
    personFirstName: {
        type: String
    },
    personLastName: {
        type: String
    },
    personDobDay: {
        type: String
    },
    personDobMonth: {
        type: String
    },
    personDobYear: {
        type: String
    },
    personAdressCity: {
        type: String
    },
    personAdressCountry: {
        type: String
    },
    personAdressLine1: {
        type: String
    },
    personAdressLine2: {
        type: String
    },
    personAdressPostalCode: {
        type: String
    },
    personAdressState: {
        type: String
    },
    ssn: {
        type: String
    },
    personPhone: {
        type: String
    },
    personEmail: {
        type: String
    },
    fileName: {
        type: String
    },
    companyName: {
        type: String
    },
    companyPhone: {
        type: String
    },
    companyTaxID: {
        type: String
    },
    companyAddreesCity: {
        type: String
    },
    companyAddreesState: {
        type: String
    },
    companyAddreesLine1: {
        type: String
    },
    companyAddreesLine2: {
        type: String
    },
    companyAddreesPostalCode: {
        type: String
    },

});




var StripeDriverModel = mongoose.model('Driverdetails', DriverDetailSchema)




module.exports = StripeDriverModel;