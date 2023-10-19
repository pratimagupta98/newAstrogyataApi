const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thisSchema = new Schema(
    {
        astroId: {
            type: mongoose.Schema.Types.ObjectId, ref: "astrologer"
        },
        bank_name: {
            type: String,
        },
        account_number: {
            type: String,
        },
        ifsc_code: {
            type: String,
        },
        pan_number: {
            type: String,
        },
        status:{
            type: String,
            default:"Pending"
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("bankDetail", thisSchema);
