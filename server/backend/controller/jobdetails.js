var DetailsModel = require('../model/details')


const savejobdetails = async(req, res) => {

    var Details = new DetailsModel({
        title: req.body.title,
        companyhq: req.body.companyhq,
        companyName: req.body.companyName,
        jobtype: req.body.jobtype,
        state: req.body.state,
        jobdescription: req.body.jobdescription
    });
    await Details.save();
    res.json({ message: 'Success' });


}

module.exports = {
    savejobdetails
};