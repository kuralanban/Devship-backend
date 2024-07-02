const db = require("../models");
const userService = require("../services/user.service");

exports.validateUser = async (req, res) => {
  try {
    const user = await userService.validateUserService(req.body);
    if (user) {
      return res.status(200).send({
        message: "User Validated Sucessfully",
        token: user
      });
    }
  } catch (err) {
    console.log(err)
    return res.status(400).send({
      message: "Error User Validation",
      error:err.message
    });
  }
};
exports.saveNewUser = async (req, res) => {
  try {
    const saveUser = await userService.saveUserService(req.body);
    if (saveUser) {
      return res.status(200).send({
        message: "User Saved Successfully",
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message, 
    });
  }
};
