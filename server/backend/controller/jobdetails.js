var JobDetailsModel = require('../model/Jobdetails')


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

module.exports = {
    savejobdetails
};