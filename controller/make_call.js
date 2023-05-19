
const make_call = require("../models/make_call.js");
const VideoModel = require("../models/videomodel.js");

const Astrologer = require("../models/astrologer");

const resp = require("../helpers/apiResponse");
const User = require("../models/users");

//chngee
// exports.make_call = async (req, res) => {
//   var request = require('request');
//   CircularJSON = require('circular-json')

//   key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//   sid = "sveltosetechnologies2"
//   token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//   from = req.body.from
//   to = req.body.to

//   const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//   const axios = require('axios')
//   url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
//   var requestBody =
//     axios.post(url,
//       formUrlEncoded({
//         "From": req.body.From,   //USER
//         "To": req.body.To,       //ASTRO
//         "userid": req.body.userid,
//         "astroid": req.body.astroid,
//         "walletId": req.body.walletId,
//         //  "CallerId": '011-411-68588',
//         "CallerId": '080-473-59942',


//         "CallerType": 'promo',
//         // "Status" :"Status",2
//         // "StartTime":"StartTime",
//         // "EndTime" :"EndTime",
//         // "Duration" :"Duration",
//         // "Price" :"Price",
//         // "RecordingUrl":"RecordingUrl"

//       }),

//       {
//         withCredentials: true,
//         headers: {
//           "Accept": "application/x-www-form-urlencoded",
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         data: JSON.stringify(`statusCode: ${res.statusCode}`)
//       },
//     )
//       .then(async (response) => {
//         console.log(`statusCode: ${res.statusCode}`)
//         //   console.log("RES",response)
//         const str = CircularJSON.stringify(response.data);
//         console.log("str", str)
//         const getdata = JSON.parse(str)
//         console.log("getdata", JSON.parse(str))
//         //  res.send(JSON.parse(str))
//         var options = {
//           From: req.body.From,   //USER
//           To: req.body.To,       //ASTRO
//           userid: req.body.userid,
//           astroid: req.body.astroid,
//           Sid: getdata.Call?.Sid,
//           ParentCallSid: getdata.Call?.ParentCallSid,
//           DateCreated: getdata.Call?.DateCreated,
//           DateUpdated: getdata.Call?.DateUpdated,
//           AccountSid: getdata.Call?.AccountSid,
//           PhoneNumberSid: getdata.Call?.PhoneNumberSid,
//           Status: getdata.Call?.Status,
//           StartTime: getdata.Call?.StartTime,
//           EndTime: getdata.Call?.EndTime,
//           Duration: getdata.Call?.Duration,
//           Price: getdata.Call?.Price,
//           Direction: getdata.Call?.Direction,
//           AnsweredBy: getdata.Call?.AnsweredBy,
//           ForwardedFrom: getdata.Call?.ForwardedFrom,
//           CallerName: getdata.Call?.CallerName,
//           Uri: getdata.Call?.Uri,
//           RecordingUrl: getdata.Call?.RecordingUrl




//         }


//         await make_call.create(options, function (err, response) {
//           console.log("RES", options);
//           const str = CircularJSON.stringify(response.data);

//           //res.send(str)

//           res.json({
//             order: options,
//           });
//           if (err) {
//             res.json({
//               err: err,
//             });
//           }
//         }
//         )
//       })
//   // res.send(JSON.parse(str))
//   //    let result = await make_call.create(requestBody)
//   //    console.log("CREATED DATA",result)

//   //   })
//   //   .catch((error) => {
//   //   console.error(error)
//   //   res.send(error)
//   //  })
// }

//chnaginggg
// exports.make_call = async (req, res) => {
//   try {
//     // previous code
//     var request = require('request');
//     CircularJSON = require('circular-json')


//     key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     sid = "sveltosetechnologies2"
//     token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//     from = req.body.from
//     to = req.body.to

//     const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//     const axios = require('axios')
//     url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
//     var requestBody =
//       axios.post(url,
//         formUrlEncoded({
//           "From": req.body.From,   //USER
//           "To": req.body.To,       //ASTRO
//           "userid": req.body.userid,
//           "astroid": req.body.astroid,
//           "walletId": req.body.walletId,
//           //  "CallerId": '011-411-68588',
//           "CallerId": '080-473-59942',
//           "CallerType": 'promo',
//         }),

//         {
//           withCredentials: true,
//           headers: {
//             "Accept": "application/x-www-form-urlencoded",
//             "Content-Type": "application/x-www-form-urlencoded"
//           },
//           //  data: JSON.stringify(`statusCode: ${res.statusCode}`)
//         },
//       )



//     // if (getdata.Call?.Status !== "failed") {
//     // Retrieve user's wallet information
//     const userWallet = await User.findOne({ _id: req.body.userid });
//     console.log("userWallet", userWallet)

//     // Check if user has enough funds
//     const astroWallet = await Astrologer.findOne({ _id: req.body.astroid });
//     let callPrice = astroWallet?.callCharge
//     if (userWallet.amount < callPrice) {
//       res.status(400).json({
//         status: false,
//         msg: "Insufficient funds"
//       })
//     } else {
//       // Deduct amount from user's wallet every second until the call ends
//       if (getdata.Call?.Status !== "failed") {
//         const response = await requestBody;
//         console.log(`statusCode: ${res.statusCode}`)
//         const str = CircularJSON.stringify(response.data);
//         console.log("str", str)
//         const getdata = JSON.parse(str)
//         console.log("getdata", JSON.parse(str))
//         let timer = setInterval(async () => {
//           userWallet.amount -= callPrice;
//           console.log("Remaining amount: ", userWallet.amount)
//           await userWallet.save();
//           const call = await make_call.findOne({ Sid: getdata.Call?.Sid });
//           if (call?.Status === "completed" || call?.Status === "failed") {
//             clearInterval(timer);
//           }
//         }, 1000); // 1000 ms = 1 second

//         // Create call information object
//         var options = {
//           From: req.body.From,   //USER
//           To: req.body.To,       //ASTRO
//           userid: req.body.userid,
//           astroid: req.body.astroid,
//           Sid: getdata.Call?.Sid,
//           // ...
//         };

//         // Save call information to database
//         const callInfo = await make_call.create(options);

//         // Send response to client
//         res.json({
//           order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()
//         });
//       } else {
//         throw new Error("Call failed");
//       }
//     }
//     // } else {
//     //   throw new Error("Call failed");
//     // }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Internal server error"
//     });
//   }
// };

//chnagging
exports.make_call = async (req, res) => {
  try {

    var request = require('request');
    CircularJSON = require('circular-json')
    key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
    sid = "sveltosetechnologies2"
    token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
    from = req.body.from
    to = req.body.to

    const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
    var requestBody =
      axios.post(url,
        formUrlEncoded({
          "From": req.body.From,   //USER
          "To": req.body.To,       //ASTRO
          "userid": req.body.userid,
          "astroid": req.body.astroid,
          "walletId": req.body.walletId,
          //  "CallerId": '011-411-68588',
          "CallerId": '080-473-59942',
          "CallerType": 'promo',
        }),

        {
          withCredentials: true,
          headers: {
            "Accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: JSON.stringify(`statusCode: ${res.statusCode}`)
        },
      )

    const response = await requestBody;
    console.log(`statusCode: ${res.statusCode}`)
    const str = CircularJSON.stringify(response.data);
    console.log("str", str)
    const getdata = JSON.parse(str)
    console.log("getdata", JSON.parse(str))

    //   if (getdata.Call?.Status !== "failed") {
    //     var options = {
    //       From: req.body.From,   //USER
    //       To: req.body.To,       //ASTRO
    //       userid: req.body.userid,
    //       astroid: req.body.astroid,
    //       Sid: getdata.Call?.Sid,
    //       ParentCallSid: getdata.Call?.ParentCallSid,
    //       DateCreated: getdata.Call?.DateCreated,
    //       DateUpdated: getdata.Call?.DateUpdated,
    //       AccountSid: getdata.Call?.AccountSid,
    //       PhoneNumberSid: getdata.Call?.PhoneNumberSid,
    //       Status: getdata.Call?.Status,
    //       StartTime: getdata.Call?.StartTime,
    //       EndTime: getdata.Call?.EndTime,
    //       Duration: getdata.Call?.Duration,
    //       Price: getdata.Call?.Price,
    //       Direction: getdata.Call?.Direction,
    //       AnsweredBy: getdata.Call?.AnsweredBy,
    //       ForwardedFrom: getdata.Call?.ForwardedFrom,
    //       CallerName: getdata.Call?.CallerName,
    //       Uri: getdata.Call?.Uri,
    //       RecordingUrl: getdata.Call?.RecordingUrl
    //     }

    //     // Save call information to database
    //     const callInfo = await (await make_call.create(options))
    //     const getuserdetail = await User.findOne({ _id: req.body.userid })
    //     console.log("getuser", getuserdetail.amount)
    //     // Send response to client
    //     res.json({
    //       order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()
    //     });
    //   } else {
    //     throw new Error("Call failed");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({
    //     error: "Internal server error"
    //   });
    // }
    if (getdata.Call?.Status !== "failed") {
      // Retrieve user's wallet information
      const userWallet = await User.findOne({ _id: req.body.userid });
      // const getoneastro = await Astrologer.findOne({ _id: req.body.astroid })
      // console.log("astro", getoneastro)
      // const getminamt = getoneastro.min_amount
      // console.log("CALLCHARGE", getminamt)

      // Check if user has enough funds
      const callPrice = getdata.Call?.Price || 0;
      if (userWallet.amount < callPrice) {
        throw new Error("Insufficient funds");
      }

      // Deduct amount from user's wallet
      // const startTime = Date.now();
      // const durationInterval = setInterval(() => {
      //   const duration = Math.ceil((Date.now() - startTime) / 60000); // duration in minutes
      //console.log(`Call duration: ${duration} minute(s)`);
      //  })
      // Deduct the call price from the user's wallet
      //   const callPrice = getdata.Call?.Price || 0;
      //   userWallet.amount -= callPrice;
      //   await userWallet.save();

      //   // Update the call information in the database
      //   const callInfo = await make_call.findOneAndUpdate(
      //     { Sid: getdata.Call?.Sid },
      //     { Duration: duration },
      //     { new: true }
      //   );
      // }, 60000); // run every minute

      // userWallet.amount -= callPrice;
      // await userWallet.save();

      // Create call information object
      var options = {
        From: req.body.From,   //USER
        To: req.body.To,       //ASTRO
        userid: req.body.userid,
        astroid: req.body.astroid,
        Sid: getdata.Call?.Sid,
        // ...
      };

      // Save call information to database
      const callInfo = await (await make_call.create(options));

      // Send response to client
      res.json({
        order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()

      });
    } else {
      throw new Error("Call failed");
    }
  } catch (err) {
    // console.error(err);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};


//     //   .then((res) => {
//     //   console.log(`statusCode: ${res.statusCode}`)
//     //   console.log(res)
//     //   res.send(response.body);
//     //   var serverRes = response.body
//     //   return serverRes
//     // })
//     // let result = await make_call.create(data)

//     // .catch((error) => {
//     //   console.error(error)
//   })

//}


// exports.callStatus = async (req, res) => {

//     your_api_key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     your_sid="sveltosetechnologies2"
//     your_api_token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//     subdomain= "@api.exotel.in"  
//     CallSid='080-473-59942'


//     var request = require("request");
//     var options = {
//       method: "GET",
//       url: `https://your_api_key:your_api_token/subdomain/v1/Accounts/your_sid/Calls/CallSid`,
//       headers: {
//         "Accept":"application/x-www-form-urlencoded",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//       form: {}
//     };
//   console.log("options",options)
//     request(options, function (error, response, body) {
//       if (response) {
//         var toparse = response.body;
//         res.status(200).send(toparse);
//       }
//       if (error) {
//         res.status(200).send(error);
//       }
//     });
//   };




//   exports.callStatus = async (req, res) => {
//     key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     sid="sveltosetechnologies2"
//     token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
//     CallSid= "/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json"
//     var request = require('request');
// var options = {
//   //  url: 'https://<your_api_key>:<your_api_token><subdomain>/v1/Accounts/<your_sid>/Calls/b6cfaf5f5cef3ca0fc937749ef960e25'
//  //   url:"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+CallSid+""

// // url:"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+"a2f80c3aec91e3747a14198d32ae16bu"+".json"
// url :"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+"a2f80c3aec91e3747a14198d32ae16bu"+"?details=true"

// };
// console.log("options",options)

// console.log(`statusCode: ${res.statusCode}`)
// console.log("RES",response)

// // function callback(error, response, body) {
// //     if (!error && response.statusCode == 200) {
// //         console.log("BODY",body);
// //     }
// // }

// request(options, callback)
// //console.log("callback",callback)
//   }


// exports.callStatus = async (req, res) => {
//   var request = require('request');

//   key="90c1bddcdace6f704819ebc54d740ebbbdf37f2ad30a4e8f"
//   sid="astrologically3"
//   token="04d432d9144e8521e1e31f8297e3d199d3c73b8676c49df8"
//       from=req.body.from     
//       to=req.body.to



//       const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//       const axios = require('axios')
//       url="https://api.exotel.com/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json"
//       axios.get(url, {headers:{"Authorization":'Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='}},
//          formUrlEncoded({


//         "CallerId":'080-473-59942',
//         "CallerType": 'promo',


//       }),
//       {   
//           withCredentials: true,
//           headers: {
//               "accept": "application/json",
//               "Content-Type": "application/x-www-form-urlencoded",
//               'Authorization': 'Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='
//           }
//         },
//         )
//         .then(async(response) => {
//           console.log(`statusCode: ${res.statusCode}`)
//           console.log("RES",response)
//           res.status(200).json({
//             status:true,
//             msg:"success",
//             data : response.data,
//           })

//  })

// //         .catch((error) => {
// //           console.error(error)
// //         })
// // .then((res) => {
// //   console.log(`statusCode: ${res.statusCode}`)
// //   console.log(res)
// // })
//     }





//       curl -X GET 'https://api.exotel.com/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json'
// -H 'Authorization: Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='
// -H 'accept: application/json'


exports.callStatus = async (req, res) => {
  var request = require('request');

  key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
  sid = "sveltosetechnologies2"
  token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"


  var options = {
    url: 'https://d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4:856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e@api.exotel.in/v1/Accounts/sveltosetechnologies2/Calls/9daef6e7629eed377ed91f2b732b174k.json'
  }
  //console.log("options",options)
  function callback(error, response, body) {
    if (response) {
      var toparse = response.body;
      res.status(200).send(toparse);
    }
    if (error) {
      res.status(200).send(error);
    }
  }
  request(options, callback);
}

exports.call_Status = async (req, res) => {
  await make_call.find().populate("userid").populate("astroid")
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


// router.get('/videoCall', (req, res) => {
//     const generateRtcToken = () => {
//         // Rtc Examples
//         const appId = '7d1f07c76f9d46be86bc46a791884023';
//         const appCertificate = '14cdb5fc04344d0da3270c35d8d75431 ';
//         const channelName = 'demo';
//         const uid = 0;
//         const userAccount = "632da83471b4d7fd47492f03";
//         const role = RtcRole.PUBLISHER;

//         const expirationTimeInSeconds = 3600

//         const currentTimestamp = Math.floor(Date.now() / 1000)

//         const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

//         // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

//         // Build token with uid
//         const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
//         console.log("Token With Integer Number Uid: " + tokenA);

//         // Build token with user account
//         const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, userAccount, role, privilegeExpiredTs);
//         console.log("Token With UserAccount: " + tokenB);

//         res.status(200).json({
//             tokenA: tokenA,
//             tokenB: tokenB
//         });
//     }
//     generateRtcToken()
// })

//const UserCall = require('../models/UserCall'); // Import the UserCall model

//router.post('/videoCall', async (req, res) => { // Use POST instead of GET to pass data in the request body
const agora = require('agora-access-token');

// exports.astroVideoCall = async (req, res) => {
//   const {
//     RtcTokenBuilder,
//     RtcRole,
//   } = agora;

//   // const getchnlname = await Astrologer.findOne({_id:req.body.astroAccount});
//   // console.log("astro",getchnlname);

//   const appId = '7d1f07c76f9d46be86bc46a791884023';
//   const appCertificate = '14cdb5fc04344d0da3270c35d8d75431 ';
//   // const channelName = getchnlname.channelName;
//   // console.log("channel name",channelName);
//   channelName = "pratima"
//   const uid = 1;
//  // const { astroAccount, } = req.body; // Get the userId from the request body
//  //uid ="6352904e3755959407f948a6"
//   const role = RtcRole.PUBLISHER;
//   const expirationTimeInSeconds = 3600; // 24 hours
//   const currentTimestamp = Math.floor(Date.now() / 1000);
//   const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

//   const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
//   console.log("Token With Integer Number Uid: " + tokenA);
//   // const newVideoModel = new VideoModel({
//   //  // astroAccount:astroAccount,
//   //   token: astroToken,
//   //   channelName: channelName,
//   //   createdAt: Date.now()
//   // });
//   // await newVideoModel.save();

//   // res.status(200).json({
//   //   astroToken: astroToken,
//   // });
// }

// exports.userVideoCall = async (req, res) => {
//   const {
//     RtcTokenBuilder,
//     RtcRole,
// } = agora;

// const generateRtcToken =async  () => {
//         // Rtc Examples
//         const getchnlname = await Astrologer.findOne({_id:req.body.astroAccount})
// console.log("astro",getchnlname)
//         const appId = '7d1f07c76f9d46be86bc46a791884023';
//         const appCertificate = '14cdb5fc04344d0da3270c35d8d75431 ';
//         const channelName = getchnlname.channelName
//         console.log("channel name",channelName)
//         const uid = 0;
//         const { userAccount,astroAccount, } = req.body; // Get the userId from the request body

//         //const userAccount = "632da83471b4d7fd47492f03";
//         const role = RtcRole.PUBLISHER;

//         const expirationTimeInSeconds = 86400

//         const currentTimestamp = Math.floor(Date.now() / 1000)

//         const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

//         // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

//         // Build token with uid
//         const astroToken = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
//         console.log("Token With AstroAccount: " + tokenA);

//         // Build token with user account
//         const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, userAccount, role, privilegeExpiredTs);
//         console.log("Token With UserAccount: " + tokenB);


//         // Save call information to database
//         const newVideoModel = new VideoModel({
//           userAccount: userAccount,
//           astroAccount:astroAccount,
//             token: tokenB, // Save the token with user account
//             channelName: channelName,
//             createdAt: Date.now()
//         });
//         await newVideoModel.save();

//         res.status(200).json({
//           astroToken: astroToken,
//             tokenB: tokenB
//         });
//     }
//     generateRtcToken();
// }

exports.astroVideoCall = async (req, res) => {

  const {
    RtcTokenBuilder,
    RtcRole,
  } = agora;

  const getchnlname = await Astrologer.findOne({ _id: req.body.astroAccount })
  //console.log("astro", getchnlname)
  const channelName = getchnlname.channelName
  const generateRtcToken = () => {
    // Rtc Examples
    const appId = '7d1f07c76f9d46be86bc46a791884023';
    const appCertificate = '14cdb5fc04344d0da3270c35d8d75431';
    // const channelName = 'anujesh';
    const channelName = getchnlname.channelName

    const uid = 0;
    // const userAccount = "a76414c384874a389be2aeebec534b2a";
    const { astroAccount } = req.body;

    //const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 36000

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, astroAccount, privilegeExpiredTs);
    //  console.log("Token With Integer Number Uid: " + tokenA);
    //  console.log("tokenA", channelName)
    // Build token with user account
    // const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, userAccount, privilegeExpiredTs);
    // console.log("Token With UserAccount: " + tokenB);

    res.status(200).json({
      astroAccount: tokenA,
      channelName: channelName,
      astroId: astroAccount

    });

  }
  generateRtcToken()
}


// exports.userVideoCall = async (req, res) => {

//   const {
//     RtcTokenBuilder,
//     RtcRole,
//   } = agora;

//   const getchnlname = await Astrologer.findOne({ _id: req.body.userAccount })
//   console.log("astro", getchnlname)
//   const channelName = getchnlname.channelName
//   const generateRtcToken = () => {
//     // Rtc Examples
//     const appId = '7d1f07c76f9d46be86bc46a791884023';
//     const appCertificate = '14cdb5fc04344d0da3270c35d8d75431';
//     // const channelName = 'anujesh';
//     const channelName = getchnlname.channelName

//     const uid = 0;
//     // const userAccount = "a76414c384874a389be2aeebec534b2a";
//     const { userAccount } = req.body;

//     //const role = RtcRole.PUBLISHER;

//     const expirationTimeInSeconds = 36000

//     const currentTimestamp = Math.floor(Date.now() / 1000)

//     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

//     // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

//     // Build token with uid
//     const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, userAccount, privilegeExpiredTs);
//     console.log("Token With Integer Number Uid: " + tokenA);
//     console.log("tokenA", channelName)
//     // Build token with user account
//     // const tokenB = RtcTokenBuilder.buildTokenWithAccount(appId, appCertificate, channelName, userAccount, privilegeExpiredTs);
//     // console.log("Token With UserAccount: " + tokenB);

//     res.status(200).json({
//       astroAccount: tokenA,

//     });

//   }
//   generateRtcToken()
// }



// exports.userVideoCall = async (req, res) => {
//   const {
//     RtcTokenBuilder,
//     RtcRole,
//   } = agora;

//   const generateRtcToken = async () => {
//     // Rtc Examples
//     const getuser = await User.findOne({ _id: req.body.userid })
//     const getamt = getuser.amount
//     console.log("amt", getamt)

//     const getchnlname = await Astrologer.findOne({ _id: req.body.astroid })
//     console.log("astro", getchnlname)
//     const callcrg = getchnlname.callCharge
//     const tokend = (getamt / callcrg) * 60
//     console.log("tokend", tokend)
//     const appId = '7d1f07c76f9d46be86bc46a791884023';
//     const appCertificate = '14cdb5fc04344d0da3270c35d8d75431 ';
//     // const channelName = getchnlname.channelName
//     // console.log("channel name", channelName)
//     const channelName = "anujesh"

//     const uid = 0;
//     const { userid, astroid, } = req.body; // Get the userId from the request body

//     const userAccount = "632da83471b4d7fd47492f03";
//     // const role = RtcRole.PUBLISHER;

//     const expirationTimeInSeconds = 36000

//     const currentTimestamp = Math.floor(Date.now() / 1000)

//     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
//     console.log("privilegeExpiredTs", privilegeExpiredTs)

//     // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

//     // Build token with uid
//     const userToken = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, privilegeExpiredTs);
//     console.log("Token With userToken: " + userToken);

//     // Save call information to database
//     const newVideoModel = new VideoModel({
//       userid: userid,
//       astroid: astroid,
//       channelName: channelName,
//       userToken: userToken,
//       createdAt: Date.now()
//     });
//     return newVideoModel.save(); // Return the promise from the save() function call
//   }
//   const newVideoModel = await generateRtcToken(); // Wait for the promise to resolve
//   res.status(200).json({
//     userToken: newVideoModel.userToken
//   });
// }




exports.userVideoCall = async (req, res) => {

  const {
    RtcTokenBuilder,
    RtcRole,
  } = agora;
  const { astroAccount, userAccount } = req.body;

  const getuser = await User.findOne({ _id: req.body.userAccount })
  const getamt = getuser.amount
  // console.log("amt", getamt)

  const getchnlname = await Astrologer.findOne({ _id: req.body.astroAccount })
  const callcrg = getchnlname.callCharge
  const tokend = (getamt / callcrg) * 60
  // console.log("tokend", tokend)
  const channelName = getchnlname.channelName
  const generateRtcToken = () => {
    // Rtc Examples
    const appId = '7d1f07c76f9d46be86bc46a791884023';
    const appCertificate = '14cdb5fc04344d0da3270c35d8d75431';
    // const channelName = 'anujesh';
    const channelName = getchnlname.channelName

    const uid = 0;
    // const userAccount = "a76414c384874a389be2aeebec534b2a";

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + tokend
    // Build token with uid
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, privilegeExpiredTs);

    res.status(200).json({
      userAccount: tokenA,
      channelName: channelName
    });

  }
  generateRtcToken()
}