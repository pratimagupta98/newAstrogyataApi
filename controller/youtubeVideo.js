const Video = require("../models/youtubeVideo");
const resp = require("../helpers/apiResponse");

exports.video = async (req, res) => {
    const { youtube_link } = req.body;

    const newVideo = new Video({
        youtube_link: youtube_link,
    });

    newVideo
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.video_list = async (req, res) => {
    await Video.find()
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.getone_video = async (req, res) => {
    await Video.findOne({ _id: req.params.id })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.edit_video = async (req, res) => {
    await Video.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.dlt_video = async (req, res) => {
    await Video.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};

