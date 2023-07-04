const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: "user"

        },
        astroId: {
            type: mongoose.Schema.Types.ObjectId, ref: "astrologer"
        },
        status: {
            type: String
        },
        duration: {
            type: String
        },
        type: {
            type: String
        },
        userdeductedAmt: {
            type: Number,
            default: 0
        },
        astroCredited: {
            type: Number,
            default: 0
        },
        adminCredited: {
            type: Number,
            default: 0
        },
        totalCredited: {
            type: Number,
            default: 0
        },
        userAmt: {
            type: Number,
            default: 0
        }

    },

    { timestamps: true }
);


module.exports = mongoose.model("callDuration", thisSchema);
