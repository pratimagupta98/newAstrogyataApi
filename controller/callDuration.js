const callDuration = require("../models/callDuration");
const resp = require("../helpers/apiResponse");
const { findOne } = require("../models/addEvent");
const Astrologer = require("../models/astrologer");
const User = require("../models/users");

exports.addCallDuration = async (req, res) => {
    const { userId, astroId, status } = req.body;

    try {
        // Finding the astrologer
        const astro = await Astrologer.findOne({ _id: astroId });

        // Getting the call charge
        console.log("call charge", astro.callCharge);
        const getastrochrge = astro.callCharge;
        const astroCallCharge = astro.callCharge * 5;
        console.log("astroCallCharge", astroCallCharge);
        const user = await User.findOne({ _id: userId });
        const userAmount = user.amount;
        console.log("userAmount", userAmount);
        const onemincharge = astro.callCharge;
        const amountToDeduct = astroCallCharge;
        let waitTym = userAmount / getastrochrge;
        console.log("waitTym", waitTym);

        if (amountToDeduct <= userAmount) {
            const updatedAmount = userAmount - onemincharge;
            user.amount = updatedAmount;

            const newCallDuration = new callDuration({
                duration: 60, // One minute duration
                userId: userId,
                astroId: astroId,
                status: status,
            });

            await Promise.all([user.save(), newCallDuration.save()]);

            res.status(200).json({ message: "Call duration added successfully" });
        } else {
            res.status(400).json({ message: "Insufficient balance for the call" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.intetakeNotification = async (req, res) => {
    await intakeNotification
        .find()
        .populate("userId")
        .populate("chatIntekId")
        .populate("astroId")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.deductBalance = async (req, res) => {
    const { userId, astroId } = req.body;

    const user = await User.findById(userId);
    const astro = await Astrologer.findById(astroId);

    if (user.amount <= astro.callCharge * 5) {
        const deductedBalance = user.amount - astro.callCharge;
        await User.updateOne({ _id: userId }, { amount: deductedBalance }).then(
            (res) => {
                res.status(203).send("Balance is low");
            }
        );
    } else if (user.amount < astro.callCharge) {
        res.status(404).send("Your balance is not enough to chat");
    }

    const deductedBalance = user.amount - astro.callCharge;
    await User.updateOne({ _id: userId }, { amount: deductedBalance }).then(
        (res) => {
            res.status(200).send("Balance Deducted successfully");
        }
    );
};

exports.changeToAvailable = async (req, res) => {
    await Astrologer.updateOne({ _id: req.body.id }, { status: "Available" })
      .then((res) => {
        console.log(res);
        res.staus(200).send("Status updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  