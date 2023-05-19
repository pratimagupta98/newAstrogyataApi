const callDuration = require("../models/callDuration");
const resp = require("../helpers/apiResponse");
const { findOne } = require("../models/addEvent");
const Astrologer = require("../models/astrologer");
const User = require("../models/users");

exports.addCallDuration = async (req, res) => {
    const { userId, astroId, status } = req.body;

    try {
        const astro = await Astrologer.findOne({ _id: astroId });
        const astroCallCharge = astro.callCharge;

        const user = await User.findOne({ _id: userId });
        const userAmount = user.amount;

        const amountToDeduct = astroCallCharge;

        if (amountToDeduct <= userAmount) {
            const updatedAmount = userAmount - amountToDeduct;
            user.amount = updatedAmount;

            const newCallDuration = new callDuration({
                duration: 60, // One minute duration
                userId: userId,
                astroId: astroId,
                status: status
            });

            await Promise.all([user.save(), newCallDuration.save()]);

            res.status(200).json({ message: 'Call duration added successfully' });
        } else {
            res.status(400).json({ message: 'Insufficient balance for the call' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Internal server error' });
    }
};



exports.intetakeNotification = async (req, res) => {
    await intakeNotification.find().populate("userId").populate("chatIntekId").populate("astroId")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};