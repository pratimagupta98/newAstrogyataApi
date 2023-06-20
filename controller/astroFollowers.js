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

exports.unfollow_astrologer = async (req, res) => {
  const astrologerId = req.params.id;

  try {
    const deletedAstrologer = await AstroFollowers.findOneAndDelete({ _id: astrologerId, status: false });

    if (deletedAstrologer) {
      resp.successr(res, "Astrologer unfollowed and deleted successfully.");
    } else {
      const astrologer = await AstroFollowers.findOneAndUpdate(
        { _id: astrologerId },
        { $set: { status: false } },
        { new: true }
      );

      if (astrologer) {
        resp.successr(res, "unfollowed successfully.");
      } else {
        resp.errorr(res, "Astrologer not found.");
      }
    }
  } catch (error) {
    resp.errorr(res, error);
  }
};




// exports.unfollow_astrologer = async (req, res) => {
//   const astrologerId = req.params.id;

//   try {
//     const astrologer = await like.findOne({ _id: astrologerId });

//     if (astrologer.status === false) {
//       await like.deleteOne({ _id: astrologerId });
//       resp.successr(res, "Astrologer unfollowed and deleted successfully.");
//     } else {
//       astrologer.status = false;
//       await astrologer.save();
//       resp.successr(res, "Astrologer unfollowed successfully.");
//     }
//   } catch (error) {
//     resp.errorr(res, error);
//   }
// };
