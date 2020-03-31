var stripe = require('stripe')('sk_test_Ij5HHOdOu2OHIODqc3CuKo2E00KzQbIUb3');
var PassengerModel = require('../model/passenger')

const PassengerAccount = async(req, res) => {
    try {
        var body = req.body
        var PasengerDetails = new PassengerModel({
            email: body.email
        });
        let passenger = await PasengerDetails.save();
        await stripe.customers.create({
                email: body.email,
            },
            async function(err, customer) {
                // asynchronously called
                console.log(customer)
                console.log(customer.id)

                passenger.customer_id = customer.id
                await passenger.save()
                console.log(passenger.customer_id)
                return res.status(200).json({ id: passenger._id })
            }
        );
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}

const PassengerCustomerSource = async(req, res) => {
    console.log(req.body.params.id)
    var body = req.body.carddetails
    var param = req.body.params.id
    try {
        PassengerModel.findById({ _id: param }, async(err, passenger) => {
            await stripe.tokens.create({
                    card: {
                        number: body.cardNumber,
                        exp_month: body.expiryMonth,
                        exp_year: body.expiryYear,
                        cvc: body.cvc,
                    },
                },
                async function(err, token) {
                    if (token) {
                        passenger.token_id = token.id
                        await passenger.save()
                        console.log(passenger.token_id)
                        console.log(token)
                    }
                }
            );
            await stripe.customers.createSource(
                passenger.customer_id, {
                    source: 'tok_visa'
                },
                async function(err, card) {
                    passenger.card_id = card.id
                    await passenger.save()
                    console.log(card)
                    return res.status(200).json({ id: passenger._id })
                }
            );
        })
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}
const PassengerCharge = async(req, res) => {
    try {
        console.log(req.body.params.id)
        var body = req.body.paymentdetails
        console.log(req.body)
        var param = req.body.params.id
        PassengerModel.findById({ _id: param }, async(err, passenger) => {
            // console.log(passenger.customer_id)
            // console.log(passenger.card_id)
            await stripe.charges.create({
                    amount: body.amount * 100,
                    currency: body.currencyType,
                    customer: passenger.customer_id,
                    source: passenger.card_id,
                    description: body.description,
                    transfer_data: {
                        destination: "acct_1GRCQBKqOll0NqZn"
                    }
                },
                async function(err, charge) {
                    //  passenger.charge_id = charge.id
                    // await passenger.save()
                    // console.log(passenger.charge_id)
                    console.log(charge)
                    return res.status(200).json({ id: passenger._id })
                })

        })
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}

const PassengerPayout = async(req, res) => {
    var body = req.body
        //console.log(body)
    try {
        await stripe.payouts.create({
            amount: 1000,
            currency: "usd",
            destination: "ba_1GSRyOKqOll0NqZnwtM68BRS",
            // source_type: "card",
            // method: "standard",

            //  stripe_account: 'acct_1GRCQBKqOll0NqZn',
        }, function(err, payout) {
            console.log(payout)
        });



        // await stripe.payouts.create({
        //         amount: 1000,
        //         currency: 'usd',
        //         destination: "ba_1GRCRZKqOll0NqZn86IIoZqj",
        //         // source_type: "card",
        //         // method: "instant",

        //         // stripeAccount: 'acct_1GRCQBKqOll0NqZn',

        //     },

        //     function(err, payout) {
        //         // asynchronously called
        //         console.log(payout)
        //     }
        // );
        await stripe.balance.retrieve(function(err, balance) {
            // asynchronously called
            // console.log(balance.available[0].source_types)
        });
    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}
const PassengeWebHooks = async(req, res) => {

    try {

        console.log(req.body)
        await stripe.webhookEndpoints.create({
                url: 'http://localhost:3000/webhooks',
                enabled_events: [
                    'charge.failed',
                    'charge.succeeded',
                ],
            },
            function(err, webhookEndpoint) {
                console.log(webhookEndpoint)
            }
        );


    } catch (error) {
        return res.status(400).json({ message: "Failed" })
    }
}

module.exports = {
    PassengerAccount,
    PassengerCustomerSource,
    PassengerCharge,
    PassengerPayout,
    PassengeWebHooks
};