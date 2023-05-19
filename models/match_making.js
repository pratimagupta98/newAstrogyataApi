const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      // userId :{
      //   type: mongoose.Schema.Types.ObjectId, ref: "user"
      // },
      m_day:{
        type: Number, 
       },
       m_month:{
        type: Number, 
       },
       m_year:{
        type: Number, 
       },
       m_hour:{
        type: Number, 
       },

   m_min:{
    type: Number, 
   },
   m_lat:{
    type: Number, 
   },
   m_lon:{
    type: Number,
   },
   m_tzone:{
    type: Number,
   },
   f_day:{
    type: Number,
   },
   f_month:{
    type: Number,
   },
   f_year:{
    type: Number,
   },
   f_hour:{
    type: Number,
   },
   f_min:{
    type: Number,
   },
   f_lat:{
    type: Number,
   },
   f_lon:{
    type: Number,
   },
   f_tzone:{
    type: Number,
   },
   match_method:{
    type: String,
   },
   manglik_regional_setting:{
    type: String,
   }
       
      },
     
    { timestamps: true }
  );


  module.exports = mongoose.model("matchMaking", thisSchema);
