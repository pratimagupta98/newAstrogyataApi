const express = require("express");
const router = express.Router();


const {
    addAstroFollowers

} = require("../controller/astroFollowers");



router.post("/user/addAstroFollowers", addAstroFollowers);


module.exports = router;

