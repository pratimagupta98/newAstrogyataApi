
const make_call = require("../models/make_call.js");
const VideoModel = require("../models/videomodel.js");

const Astrologer = require("../models/astrologer");

const resp = require("../helpers/apiResponse");
const User = require("../models/users");


//chnagging
// exports.make_call = async (req, res) => {
//   try {

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
//           data: JSON.stringify(`statusCode: ${res.statusCode}`)
//         },
//       )

//     const response = await requestBody;
//     console.log(`statusCode: ${res.statusCode}`)
//     const str = CircularJSON.stringify(response.data);
//     console.log("str", str)
//     const getdata = JSON.parse(str)
//     console.log("getdata", JSON.parse(str))

//     //   if (getdata.Call?.Status !== "failed") {
//     //     var options = {
//     //       From: req.body.From,   //USER
//     //       To: req.body.To,       //ASTRO
//     //       userid: req.body.userid,
//     //       astroid: req.body.astroid,
//     //       Sid: getdata.Call?.Sid,
//     //       ParentCallSid: getdata.Call?.ParentCallSid,
//     //       DateCreated: getdata.Call?.DateCreated,
//     //       DateUpdated: getdata.Call?.DateUpdated,
//     //       AccountSid: getdata.Call?.AccountSid,
//     //       PhoneNumberSid: getdata.Call?.PhoneNumberSid,
//     //       Status: getdata.Call?.Status,
//     //       StartTime: getdata.Call?.StartTime,
//     //       EndTime: getdata.Call?.EndTime,
//     //       Duration: getdata.Call?.Duration,
//     //       Price: getdata.Call?.Price,
//     //       Direction: getdata.Call?.Direction,
//     //       AnsweredBy: getdata.Call?.AnsweredBy,
//     //       ForwardedFrom: getdata.Call?.ForwardedFrom,
//     //       CallerName: getdata.Call?.CallerName,
//     //       Uri: getdata.Call?.Uri,
//     //       RecordingUrl: getdata.Call?.RecordingUrl
//     //     }

//     //     // Save call information to database
//     //     const callInfo = await (await make_call.create(options))
//     //     const getuserdetail = await User.findOne({ _id: req.body.userid })
//     //     console.log("getuser", getuserdetail.amount)
//     //     // Send response to client
//     //     res.json({
//     //       order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()
//     //     });
//     //   } else {
//     //     throw new Error("Call failed");
//     //   }
//     // } catch (err) {
//     //   console.error(err);
//     //   res.status(500).json({
//     //     error: "Internal server error"
//     //   });
//     // }
//     if (getdata.Call?.Status !== "failed") {
//       // Retrieve user's wallet information
//       const userWallet = await User.findOne({ _id: req.body.userid });
//       // const getoneastro = await Astrologer.findOne({ _id: req.body.astroid })
//       // console.log("astro", getoneastro)
//       // const getminamt = getoneastro.min_amount
//       // console.log("CALLCHARGE", getminamt)

//       // Check if user has enough funds
//       const callPrice = getdata.Call?.Price || 0;
//       if (userWallet.amount < callPrice) {
//         throw new Error("Insufficient funds");
//       }

//       // Deduct amount from user's wallet
//       // const startTime = Date.now();
//       // const durationInterval = setInterval(() => {
//       //   const duration = Math.ceil((Date.now() - startTime) / 60000); // duration in minutes
//       //console.log(`Call duration: ${duration} minute(s)`);
//       //  })
//       // Deduct the call price from the user's wallet
//       //   const callPrice = getdata.Call?.Price || 0;
//       //   userWallet.amount -= callPrice;
//       //   await userWallet.save();

//       //   // Update the call information in the database
//       //   const callInfo = await make_call.findOneAndUpdate(
//       //     { Sid: getdata.Call?.Sid },
//       //     { Duration: duration },
//       //     { new: true }
//       //   );
//       // }, 60000); // run every minute

//       // userWallet.amount -= callPrice;
//       // await userWallet.save();

//       // Create call information object
//       var options = {
//         From: req.body.From,   //USER
//         To: req.body.To,       //ASTRO
//         userid: req.body.userid,
//         astroid: req.body.astroid,
//         Sid: getdata.Call?.Sid,
//         // ...
//       };

//       // Save call information to database
//       const callInfo = await (await make_call.create(options));

//       // Send response to client
//       res.json({
//         order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()

//       });
//     } else {
//       throw new Error("Call failed");
//     }
//   } catch (err) {
//     // console.error(err);
//     res.status(500).json({
//       error: "Internal server error"
//     });
//   }
// };

exports.make_call = async (req, res) => {
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
        // "Status" :"Status",2
        // "StartTime":"StartTime",
        // "EndTime" :"EndTime",
        // "Duration" :"Duration",
        // "Price" :"Price",
        // "RecordingUrl":"RecordingUrl"

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


      //       .then(async(response)=>{
      //console.log(data)
      // res.status(200).json({
      //   data :JSON.stringify(response)
      // })
      //      })
      //  res.status(200).json({
      //  statusCode: `${res.statusCode}`,
      //     From: req.body.From,   //USER
      //    To: req.body.To,       //ASTRO
      //    userid:req.body.userid,
      //    astroid :req.body.astroid,
      // });
      // axios.then( function(resp){
      //   console.log(resp);
      //   res.status(200).json({
      //     status:true,
      //     msg:"success",
      //     data :resp
      //   })

      //pratima
      //   }, function(err){
      //   console.log(err);

      // }

      //pratima
      // request(options, function (error, response, body) {
      //   if (response) {
      //     var toparse = response.body;
      //     res.status(200).send(toparse);
      //   }
      //   if (error) {
      //     res.status(400).send(error);
      //   }
      // });


      .then(async (response) => {
        console.log(`statusCode: ${res.statusCode}`)
        //   console.log("RES",response)
        const str = CircularJSON.stringify(response.data);
        console.log("str", str)
        const getdata = JSON.parse(str)
        console.log("getdata", JSON.parse(str))
        //  res.send(JSON.parse(str))
        var options = {
          From: req.body.From,   //USER
          To: req.body.To,       //ASTRO
          userid: req.body.userid,
          astroid: req.body.astroid,
          Sid: getdata.Call?.Sid,
          ParentCallSid: getdata.Call?.ParentCallSid,
          DateCreated: getdata.Call?.DateCreated,
          DateUpdated: getdata.Call?.DateUpdated,
          AccountSid: getdata.Call?.AccountSid,
          PhoneNumberSid: getdata.Call?.PhoneNumberSid,
          Status: getdata.Call?.Status,
          StartTime: getdata.Call?.StartTime,
          EndTime: getdata.Call?.EndTime,
          Duration: getdata.Call?.Duration,
          Price: getdata.Call?.Price,
          Direction: getdata.Call?.Direction,
          AnsweredBy: getdata.Call?.AnsweredBy,
          ForwardedFrom: getdata.Call?.ForwardedFrom,
          CallerName: getdata.Call?.CallerName,
          Uri: getdata.Call?.Uri,
          RecordingUrl: getdata.Call?.RecordingUrl

          //data :JSON.parse(str)


        }



        //      // res.json({data:response.data})
        //  //    res.send(JSON.stringify(response.data));

        //  res.json({
        //   status:"success",
        //   data:response.data,
        //   userid:req.body.userid,
        //   astroid :req.body.astroid,

        //  })
        //       // var serverRes = response.body
        //       // return serverRes

        await make_call.create(options, function (err, response) {
          console.log("RES", options);
          const str = CircularJSON.stringify(response.data);

          //res.send(str)

          res.json({
            order: options,
          });
          if (err) {
            res.json({
              err: err,
            });
          }
        }
        )
      })
  // res.send(JSON.parse(str))
  //    let result = await make_call.create(requestBody)
  //    console.log("CREATED DATA",result)

  //   })
  //   .catch((error) => {
  //   console.error(error)
  //   res.send(error)
  //  })
}


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



const agora = require('agora-access-token');
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


exports.callHistory = async (req, res) => {
  await make_call.find().populate("userid").populate("astroid")
    .sort({ createdAt: -1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};