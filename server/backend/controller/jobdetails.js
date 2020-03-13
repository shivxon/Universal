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


const VerifyCaptcha = async(req, res) => {
    try {
        let token = req.body.recaptcha;
        const secretkey = "6Lc2Od8UAAAAAB9NdGJ-auypfUnSHScJZ0ZpHsoh";
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${token}&remoteip=${req.connection.remoteAddress}`

        if (token === null || token === undefined) {
            return res.status(400).send({ "message": "token is invalid" })
        } else {
            await request(url, async function(err, response, body) {
                if (body) {
                    body = JSON.parse(body);
                    //check if the  validation failed
                    if (body.success !== undefined && !body.success) {
                        return res.status(400).send({ success: false, 'message': "recaptcha failed" });
                    } else {
                        //if passed response success message to client
                        await SaveSignupDetails(req, res);
                    }
                } else if (err) {
                    return res.status(400).send({ 'message': "FAILED" });
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


const SaveSignupDetails = async(req, res) => {
    try {
        var Signupdetails = new SignupDetailsModel({
            email: req.body.data.email,
            password: req.body.data.password,
        });
        let error = Signupdetails.validateSync();
        if (error) {
            return res.status(400).json({ 'message': error.errors });
        } else {
            await Signupdetails.save();
            return res.status(200).send({ "success": true, 'message': "recaptcha passed and data saved" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


module.exports = {
    savejobdetails,
    VerifyCaptcha
};