const Askqustion = require("../models/ASK_qus");
const resp = require("../helpers/apiResponse");
const Product = require("../models/product");
const Order = require("../models/order");
const Astroproduct = require("../models/astroproduct");

exports.user_ask_qus = async (req, res) => {
  const { astroid, userid, question, answer } = req.body;

  const getdata = await Order.find({
    $and: [
      { status: "COMPLETED" }, { astroid: req.body.astroid },
      { userid: userid },

    ],
  })

    .populate({
      path: "products",
      populate: {
        path: "product",
      },
    });

  console.log("getdatassss", getdata);
  let totalQsCount = 0;
  for (const order of getdata) {
    totalQsCount += order.products.qsCount;
  }
   console.log("totalQsCount", totalQsCount)
  const questions = await Askqustion.find({ userid: userid });


  if (questions.length > totalQsCount - 1) {
    console.log("your question limit is over");
    res.status(403).json({
      msg: "Your question limit is over",
      limit: totalQsCount
    });

    const lastQuestion = questions[questions.length - 1];
    await Askqustion.findOneAndUpdate(
      { _id: lastQuestion._id },
      { $set: { view_button: false } },
      { new: true }
    );
  } else {
    const newAskqustion = new Askqustion({
      astroid: astroid,
      userid: userid,
      question: question,
      answer: answer,
      
    });

    newAskqustion
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};


exports.user_ask_qus_list = async (req, res) => {
  await Askqustion.find({ userid: req.params.id })
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.list_ask_qus = async (req, res) => {
  await Askqustion.find({ $and: [{ astroid: req.params.astroid }, { userid: req.params.userid }] }).populate("astroid").populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.astro_ques_list = async (req, res) => {
  await Askqustion.find({ astroid: req.params.id }).populate("astroid").populate("userid")
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.getone_ask_qus = async (req, res) => {
  await Askqustion.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


// userId: req.params.userId,
// plan_Id: req.params.id,

exports.reply = async (req, res) => {
  const getlimit = await Askqustion.find({ _id: req.params.id }).populate("bundleOffer")
  console.log("getlimit", getlimit)
  let limit = getlimit.bundleOffer
  console.log("limit", limit)
  await Askqustion.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dlt_ask_qus = async (req, res) => {
  await Askqustion.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};


