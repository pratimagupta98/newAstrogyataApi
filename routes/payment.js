const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


const {
    phonepay
} = require("../controller/payment");


 
 router.post("/user/phonepay", phonepay);
 


 
module.exports = router;
