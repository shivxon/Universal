var stripe = require('stripe')('sk_test_Ij5HHOdOu2OHIODqc3CuKo2E00KzQbIUb3');
var express = require('express');
var router = express.Router();
var StripeDriverModel = require('../model/driverdetails')
var fs = require('fs')
var path = require('path');


var MAGIC_NUMBERS = {
    jpg: 'ffd8ffe0',
    jpg1: 'ffd8ffe1',
    png: '89504e47',
    gif: '47494638'
}

function checkMagicNumbers(magic) {
    if (magic == MAGIC_NUMBERS.jpg || magic == MAGIC_NUMBERS.jpg1 || magic == MAGIC_NUMBERS.png || magic == MAGIC_NUMBERS.gif) return true
}




const stripeNewAccount = async(req, res) => {
    try {

        var currentEmail = req.body.email
        var driverDetails = new StripeDriverModel({
            email: currentEmail
        });
        let driver = await driverDetails.save();

        await stripe.accounts.create({


                type: req.body.type,
                country: req.body.country,
                email: req.body.email,
                requested_capabilities: [
                    'card_payments',
                    'transfers',
                ],
            },
            async function(err, account) {
                console.log(account)
                console.log(currentEmail)
                driver.account_id = account.id
                await driver.save()
                return res.status(200).json({ id: driver._id })

            }
        );



    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }

}


const stripeAccountUpdate = async(req, res) => {
    try {
        //console.log(req.body)
        //console.log(req.body.params)
        var body = req.body.driverdetails
        var param = req.body.params.id

        StripeDriverModel.findById({ _id: param }, async(err, driver) => {

            console.log(driver)
            driver.companyName = body.companyName,
                driver.companyPhone = body.companyPhone,
                driver.companyTaxID = body.companyTaxID,
                driver.companyAddreesCity = body.companyAddreesCity,
                driver.companyAddreesState = body.companyAddreesState,
                driver.companyAddreesLine1 = body.companyAddreesLine1,
                driver.companyAddreesLine2 = body.companyAddreesLine2,
                driver.companyAddreesPostalCode = body.companyAddreesPostalCode,



                await driver.save()
            await stripe.accounts.update(
                driver.account_id, {
                    business_type: body.companyBusinessType,
                    company: {
                        name: body.companyName,
                        phone: body.companyPhone,
                        tax_id: body.companyTaxID,
                        owners_provided: true,
                        address: {
                            city: body.companyAddreesCity,
                            country: body.companyAddreesCountry,
                            line1: body.companyAddreesLine1,
                            line2: body.companyAddreesLine2,
                            postal_code: body.companyAddreesPostalCode,
                            state: body.companyAddreesState,
                        },
                    },
                    external_account: {
                        object: 'bank_account',
                        account_number: '000123456789',
                        routing_number: '110000000',
                        country: 'US',
                        currency: 'usd'
                    },
                    business_profile: {
                        mcc: '5734',
                        product_description: "We are a software company.",
                        url: "https://www.happysingh.com",

                    },
                    tos_acceptance: {

                        date: Math.floor(Date.now() / 1000),

                        ip: req.connection.remoteAddress,
                    },
                    settings: {
                        payouts: {

                            schedule: {
                                interval: "manual"
                            },

                        }
                    }
                },
                function(err, account) {
                    // asynchronously called
                    console.log(account);
                    return res.status(200).json({ id: driver._id })
                }
            );
        })
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}


const stripeAccountPerson = async(req, res) => {

    try {
        console.log(req.file)
        var buffer = req.file.buffer
        var magic = buffer.toString('hex', 0, 4)
        var filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname)
        if (checkMagicNumbers(magic)) {

            await fs.writeFile('/tmp/upload/' + filename, buffer, 'binary', function(err, string) {

            })
        }
        const fp1 = fs.readFileSync('/tmp/upload/' + filename);

        await stripe.files.create({
            file: {
                data: fp1,
                name: filename,
                mimetypes: 'image/png',
            },
            purpose: 'identity_document',
        }, function(err, files) {
            console.log(files)
        });
        console.log(req.body)
        console.log(req.file)
            // var body = req.body.persondetails
            // var param = req.body.params.id

        // StripeDriverModel.findById({ _id: param }, async(err, driver) => {


        //     driver.personFirstName = body.personFirstName,
        //         driver.personLastName = body.personLastName,
        //         driver.personDobDay = body.personDobDay,
        //         driver.personDobMonth = body.personDobMonth,
        //         driver.personDobYear = body.personDobYear,
        //         driver.personAdressCity = body.personAdressCity,
        //         driver.personAdressCountry = body.personAdressCountry,
        //         driver.personAdressLine1 = body.personAdressLine1,
        //         driver.personAdressLine2 = body.personAdressLine2,
        //         driver.personAdressPostalCode = body.personAdressPostalCode,
        //         driver.personAdressState = body.personAdressState,
        //         driver.ssn = body.ssn,
        //         driver.personPhone = body.personPhone,
        //         driver.personEmail = body.personEmail

        //     await driver.save()

        //     await stripe.accounts.createPerson(

        //         driver.account_id, {
        //             first_name: body.personFirstName,
        //             last_name: body.personLastName,
        //             dob: {
        //                 day: body.personDobDay,
        //                 month: body.personDobMonth,
        //                 year: body.personDobYear
        //             },
        //             address: {
        //                 city: body.personAdressCity,
        //                 country: body.personAdressCountry,
        //                 line1: body.personAdressLine1,
        //                 line2: body.personAdressLine2,
        //                 postal_code: body.personAdressPostalCode,
        //                 state: body.personAdressState,

        //             },
        //             relationship: {
        //                 director: false,
        //                 executive: true,
        //                 owner: false,
        //                 percent_ownership: null,
        //                 representative: true,
        //                 title: "manager"
        //             },
        //             ssn_last_4: body.ssn,
        //             phone: body.personPhone,
        //             email: body.personEmail,

        //         },
        //         async function(err, person) {
        //             console.log(person)
        //             driver.person_id = person.id;
        //             await driver.save()
        //         }
        //     );
        //     await stripe.accounts.updatePerson(
        //         'acct_1GRCQBKqOll0NqZn',
        //         'person_GzAqPud2gJ0vcB', {
        //             verification: {
        //                 document: {
        //                     front: 'file_1GP3cYC1h0EwaI62QDTVnFbd',
        //                     back: 'file_1GP3cZC1h0EwaI62C7MKFPFb'
        //                 },
        //             },
        //         }
        //     );
        // })
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}








module.exports = {
    stripeNewAccount,
    stripeAccountUpdate,
    stripeAccountPerson
};