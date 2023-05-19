const express = require("express");
const router = express.Router();

const {
    addChatWallet,
    getOne_Conversation_Wallet,
    addCallWallet,
    addVideoCallWallet,
    acceptChat,
    ChatWaiting,
    requested_notification,
    accepted_notification,
 //   addCallWallet_new
 
} = require("../controller/chatWallet");

//Paths
router.post("/user/addChatWallet", addChatWallet);
router.get("/user/getOne_Conversation_Wallet/:id", getOne_Conversation_Wallet);
router.post("/user/addCallWallet", addCallWallet);
router.post("/user/addVideoCallWallet", addVideoCallWallet);
router.post("/user/acceptChat/:id", acceptChat);
router.get("/user/ChatWaiting/:id", ChatWaiting);
router.get("/user/requested_notification/:id", requested_notification);
router.get("/user/accepted_notification/:id", accepted_notification);

//router.post("/user/addCallWallet_new", addCallWallet_new);





 

 
module.exports = router;
