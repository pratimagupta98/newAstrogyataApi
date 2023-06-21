const WebLivestream = require("../models/webAstroliveStream");
const resp = require("../helpers/apiResponse");

exports.WebliveStream = async (req, res) => {
    const { astroid, status, videolink } = req.body;


    const newWebLivestream = new WebLivestream({
        astroid: astroid,
        status: status,
        videolink: videolink
    });

    newWebLivestream
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.closeLiveStream = async (req, res) => {
    const getId = await WebLivestream.deleteOne({ _id: req.params.id })

        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};










