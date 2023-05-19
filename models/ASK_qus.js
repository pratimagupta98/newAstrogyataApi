const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
    astroid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "astrologer",
    },
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    question: {
      type: String,
    },
    answer:{
      type: String,
    },
    type:{
      type:String
    },
    status:{
      type:String
    },
    // bannertype: {
    //   type: String,
    // },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Askqus", thisSchema);
