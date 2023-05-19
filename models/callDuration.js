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
        }

    },

    { timestamps: true }
);


module.exports = mongoose.model("callDuration", thisSchema);
