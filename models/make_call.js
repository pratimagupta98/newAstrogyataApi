const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
     
      
        userid:{  type: mongoose.Schema.Types.ObjectId, ref: "user"},
       
        astroid:{
            type: mongoose.Schema.Types.ObjectId, ref: "astrologer"
        },
        From:{
            type :Number
        },
        To:{
            type :Number
        },
        Sid:{
            type :String   
        },
        ParentCallSid:{
            type :String 
        },
        DateCreated:{
            type :String   
        },
        DateUpdated:{
            type :String    
        },
        AccountSid:{
            type :String    
        },
        PhoneNumberSid:{
            type :String    
        },
        Status:{
            type :String    
        },
        StartTime:{
            type :String    
        },
        EndTime:{
            type :String    
        },
        Duration:{
            type :Number    
        },
        Price:{
            type :Number    
        },
        Direction:{
            type :String    
        },
        AnsweredBy:{
            type :String    
        },
        ForwardedFrom:{
            type :String    
        },
        CallerName:{
            type :String    
        },
        Uri:{
            type :String    
        },
        RecordingUrl:{
            type :String    
        },
      },
     
    { timestamps: true }
  );
  

  module.exports = mongoose.model("call", thisSchema);

//alltrade notification