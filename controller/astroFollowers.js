const AstroFollowers = require("../models/astroFollowers");
const resp = require("../helpers/apiResponse");

exports.addAstroFollowers = async (req, res) => {

  const {astroid,userid,follow} = req.body;

  const newAstroFollowers = new AstroFollowers({
    astroid:astroid,
    userid:userid,
    follow:"true"

  });


  newAstroFollowers
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
}



exports.getAstroFollowers = async (req, res) => {
  await AstroFollowers.find().populate("userid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getoneAstroFollowers = async (req, res) => {
  await AstroFollowers.findOne({ _id: req.params.id }).populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.edit_AstroFollowers = async (req, res) => {
  await AstroFollowers.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dlt_AstroFollowers= async (req, res) => {
  await AstroFollowers.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
