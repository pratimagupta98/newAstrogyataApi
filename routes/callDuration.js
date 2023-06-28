const express = require("express");
const router = express.Router();

const {
    addCallDuration,
    deductBalance,
} = require("../controller/callDuration");

router.post("/user/addCallDuration", addCallDuration);
router.post("/user/deductChatBalance", deductBalance);
// router.get("/admin/eventlist", eventlist);
// router.get("/admin/getone_event/:id", getone_event);
// router.post("/admin/edit_event/:id", edit_event);
// router.get("/admin/dlt_event/:id", dlt_event);

module.exports = router;
