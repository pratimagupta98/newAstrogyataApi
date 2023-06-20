const express = require("express");
const router = express.Router();


const {
    addAstroFollowers, getone_followers

} = require("../controller/astroFollowers");



router.post("/user/addAstroFollowers", addAstroFollowers);
router.get("/user/getone_followers/:userid/:astroid", getone_followers);


module.exports = router;

