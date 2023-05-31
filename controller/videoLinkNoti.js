const VideoLinkNoti = require("../models/videoLinkNoti");
const resp = require("../helpers/apiResponse");
const Astrologer = require("../models/astrologer");

exports.send_VideoLink = async (req, res) => {
    const { astroid, videoLink, userid } = req.body;

    const newVideoLinkNoti = new VideoLinkNoti({
        astroid: astroid,
        videoLink: videoLink,
        userid: userid

    });

    newVideoLinkNoti

        .save()
        .then((data) => resp.successr(res, data))

        .catch((error) => resp.errorr(res, error));
}




exports.VdolinkList = async (req, res) => {
    await VideoLinkNoti.find({ astroid: req.params.id }).populate("astroid")
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.getoneChannl = async (req, res) => {
    await videoChannel.findOne({ _id: req.params.id }).populate("astroid")
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.updateRashi = async (req, res) => {
    await Rashi.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.dltVideoChannl = async (req, res) => {
    await videoChannel.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};
