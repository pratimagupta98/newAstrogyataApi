const BankDetail = require("../models/bankDetail");
const resp = require("../helpers/apiResponse");

exports.addBankDetail = async (req, res) => {
  const { astroId, bank_name, account_number,ifsc_code,pan_number,status } = req.body;

  const newBankDetail = new BankDetail({
    astroId: title,
    bank_name: bank_name,
    account_number:account_number,
    ifsc_code:ifsc_code,
    pan_number:pan_number,
          status:status
  });
  
    newCategory
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  
}







exports.editCategory = async (req, res) => {
  await Category.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};


exports.dltCategory = async (req, res) => {
  await Category.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
