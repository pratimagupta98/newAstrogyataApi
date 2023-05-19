const Askqustion = require("../models/ASK_qus");
const resp = require("../helpers/apiResponse");

exports.user_ask_qus = async (req, res) => {
  const { astroid,userid,question,answer} = req.body;

  const newAskqustion = new Askqustion({
    astroid:astroid,
    userid:userid,
    question:question,
    answer:answer
    
   });
   
   newAskqustion
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
 
 

exports.user_ask_qus_list = async (req, res) => {
    await Askqustion.find({})
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
  

  