const db = require("../models");
const userService = require("../services/user.service");

exports.validateUser = async (req, res) => {
  try {
    const saveUser = userService.validateUserService(req.body);
    if (saveUser) {
      return res.status(200).send({
        message: "User Validated Sucessfully",
      });
    }
  } catch (err) {}
};
exports.saveNewUser = async (req, res) => {
  try {
    const saveUser = userService.saveUserService(req.body);
    if (saveUser) {
      return res.status(200).send({
        message: "User Saved Sucessfully",
      });
    }
  } catch (err) {}
};