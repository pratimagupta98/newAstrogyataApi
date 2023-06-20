const AstroFollowers = require("../models/astroFollowers");
const resp = require("../helpers/apiResponse");

exports.addAstroFollowers = async (req, res) => {
  const { astroid, userid, follow } = req.body;

  // Check if the combination of userid and astroid already exists in the database
  // const existingAstroFollowers = await AstroFollowers.findOne({
  //   astroid: astroid,
  //   userid: userid,
  // });

  // if (existingAstroFollowers) {
  //   return resp.errorr(res, "Combination already exists in the database");
  // }

  const newAstroFollowers = new AstroFollowers({
    astroid: astroid,
    userid: userid,
    follow: "true",
  });

  newAstroFollowers
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};




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


exports.dlt_AstroFollowers = async (req, res) => {
  await AstroFollowers.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.getone_followers = async (req, res) => {
  await AstroFollowers.findOne({ $and: [{ userid: req.params.userid }, { astroid: req.params.astroid }] })
    .populate("userid").populate("astroid")

    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};