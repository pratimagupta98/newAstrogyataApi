const Package = require("../models/package");
const resp = require("../helpers/apiResponse");

const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
const key = "verysecretkey";
const bcrypt = require("bcrypt");
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.addPackage = async (req, res) => {
    //console.log(req.body);
    const { title, mrp_price, offer_price, image } = req.body;

    const newPackage = new Package({

        title: title,
        mrp_price,
        offer_price,
        image
    });


    const findexist = await Package.findOne({ title: title });
    if (findexist) {
        resp.alreadyr(res);
    } else {
        if (req.files) {
            if (req.files.image[0].path) {
                alluploads = [];
                for (let i = 0; i < req.files.image.length; i++) {
                    const resp = await cloudinary.uploader.upload(
                        req.files.image[i].path,
                        { use_filename: true, unique_filename: false }
                    );
                    fs.unlinkSync(req.files.image[i].path);
                    alluploads.push(resp.secure_url);
                }
                newPackage.image = alluploads;
            }
        }
        newPackage.save()


            .then((data) => resp.successr(res, data))
            .catch((error) => resp.errorr(res, error));
    };
};

exports.getPackage = async (req, res) => {
    await Package.find()
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.viewonePackage = async (req, res) => {
    await Package.findOne({ _id: req.params.id })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.delPackage = async (req, res) => {
    await Package.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.editproduct = async (req, res) => {
    const { title, productname, category, image, desc, mrp_price, des_price, status } = req.body

    data = {}
    if (title) {
        data.title = title
    }
    if (productname) {
        data.productname = productname
    }
    if (category) {
        data.category = category
    }
    if (desc) {
        data.desc = desc
    }
    if (mrp_price) {
        data.mrp_price = mrp_price
    }
    if (des_price) {
        data.des_price = des_price
    }
    if (status) {
        data.status = status
    }
    if (req.files) {
        if (req.files.image) {
            alluploads = [];
            for (let i = 0; i < req.files.image.length; i++) {
                // console.log(i);
                const resp = await cloudinary.uploader.upload(req.files.image[i].path, {
                    use_filename: true,
                    unique_filename: false,
                });
                fs.unlinkSync(req.files.image[i].path);
                alluploads.push(resp.secure_url);
            }
            // newStore.storeImg = alluploads;
            data.image = alluploads;
        }
    }
    await Product.findOneAndUpdate(
        { _id: req.params.id },
        { $set: data },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.productbycategory = async (req, res) => {
    await Product.find({ category: req.params.id }).populate("category")
        .sort({ sortorder: 1 }).populate("category")

        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};