var JobDetailsModel = require('../model/Jobdetails')
var SignupDetailsModel = require('../model/signupdetails')
const request = require('request');







const savejobdetails = async(req, res) => {

    var JobDetails = new JobDetailsModel({
        jobTitle: req.body.jobTitle,
        category: req.body.category,
        jobType: req.body.jobType,
        companyhq: req.body.companyhq,
        state: req.body.state,
        howtoapply: req.body.howtoapply,
        jobdescription: req.body.jobdescription,
        companyName: req.body.companyName,
        companyStatement: req.body.companyStatement,
        companyWebsiteUrl: req.body.companyWebsiteUrl,
        email: req.body.email,
        companydescription: req.body.companydescription,
    });


    let error = JobDetails.validateSync();


    if (error) {
        return res.json({ 'message': error.errors });
    } else {

        await JobDetails.save();
        res.json({ message: 'Success' });

    }

}

const signupdetails = async(req, res) => {


    var Signupdetails = new SignupDetailsModel({

        email: req.body.data.email,
        password: req.body.data.password,
    });


    verifycaptcha = async(req, res) => {

        console.log(req.body.recaptcha)
        let token = req.body.recaptcha;

        const secretkey = "6Lc2Od8UAAAAAB9NdGJ-auypfUnSHScJZ0ZpHsoh";

        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${token}&remoteip=${req.connection.remoteAddress}`

        // console.log(secretkey)
        // console.log(token)
        // console.log(req.connection.remoteAddress)


        if (token === null || token === undefined) {
            res.status(201).send({ success: false, message: "Token is empty or invalid" })
            return console.log("token empty");


        }

        request(url, function(err, response, body) {
            //the body is the data that contains success message
            body = JSON.parse(body);

            //console.log(data)
            console.log(body)
                //check if the   validation failed
            if (body.success !== undefined && !body.success) {
                res.send({ success: false, 'message': "recaptcha failed" });
                return console.log("failed")
            } else {

                //if passed response success message to client

                let error = Signupdetails.validateSync();


                if (error) {



                    return res.json({ 'message': error.errors });


                } else {

                    Signupdetails.save();

                    console.log("im working")
                    res.send({ "success": true, 'message': "recaptcha passed" });

                }

            }
        })


    }
    await verifycaptcha(req, res);

}




module.exports = {
    savejobdetails,
    signupdetails
};