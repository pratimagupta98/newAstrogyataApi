const express = require("express");
const router = express.Router();


const {
    WebliveStream,
    closeLiveStream
} = require("../controller/webAstroliveStream");



router.post("/user/WebliveStream", WebliveStream);
router.get("/user/closeLiveStream/:id", closeLiveStream);


module.exports = router;

