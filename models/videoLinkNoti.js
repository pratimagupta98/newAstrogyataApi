const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {

        astroid:
            { type: Schema.Types.ObjectId, ref: "astrologer" },

        videoLink: {
            type: String,
        },
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },


    },




    { timestamps: true }
);


module.exports = mongoose.model("videoLinkNoti", thisSchema);
