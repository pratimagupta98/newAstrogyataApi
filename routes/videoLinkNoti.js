const express = require("express");
const router = express.Router();


const {

    send_VideoLink, VdolinkList
} = require("../controller/videoLinkNoti");



router.post("/user/send_VideoLink", send_VideoLink);
router.get("/user/VdolinkList/:id", VdolinkList);


module.exports = router;

