const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
  {
  //   astroId:{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "astrologer",
  // },
    title: {
      type: String,
    },
    productname:{
        type: String,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "productcategory",
       },
       
    image: {
      type: Array,
    },
    desc:{
        type: String,
    },
    price:{
        type: Number,
        default:0
    },
    // des_price:{
    //     type: Number,
    // },
   
    status: {
      type: String,
      default: "Active",
    },
    limit:{
      type: Number,
      default:0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("astromall", thisSchema);
