const WebLivestream = require("../models/webAstroliveStream");
const AsLive = require("../models/astroLiveStreaming");

const resp = require("../helpers/apiResponse");
const agora = require('agora-access-token');
const Astrologer = require("../models/astrologer");

// exports.WebliveStream = async (req, res) => {
//     const { astroid, status, videoliveStream } = req.body;


//     const newWebLivestream = new WebLivestream({
//         astroid: astroid,
//         status: status,
//         videoliveStream: videoliveStream
//     });

//     newWebLivestream
//         .save()
//         .then((data) => resp.successr(res, data))
//         .catch((error) => resp.errorr(res, error));
// };





exports.WebliveStream = async (req, res) => {

    const {
        RtcTokenBuilder,
        RtcRole,
    } = agora;

    const getchnlname = await Astrologer.findOne({ _id: req.body.astroAccount })
    //   console.log("astro", getchnlname)
    const channelName = getchnlname.channelName
    const generateRtcToken = () => {
        const appId = '7d1f07c76f9d46be86bc46a791884023';
        const appCertificate = '14cdb5fc04344d0da3270c35d8d75431';
        const uid = 0;
        const { astroAccount } = req.body;
        const expirationTimeInSeconds = 36000;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, astroAccount, privilegeExpiredTs);
        //  console.log("Token With Integer Number Uid: " + tokenA);
        //  console.log("tokenA", channelName);
        return tokenA;
    }

    const tokenA = await generateRtcToken();
    // console.log("tokenA", tokenA)
    const { astroAccount, status, token } = req.body
    const newAsLive = new AsLive({
        astroAccount: astroAccount,
        status: status,
        token: tokenA,
        channelName: channelName

    })


    newAsLive
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}

exports.closeLiveStream = async (req, res) => {
    const getId = await AsLive.deleteOne({ _id: req.params.id })
    if (getId) {
        res.status(200).json({
            status: true,
            msg: "Disconnect Streaming",

        })
    } else {
        res.status(500).json({
            status: false,
            message: "error",
            error: error
        });
    }

};




