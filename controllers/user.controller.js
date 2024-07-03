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
exports.getAllUsers = async (req, res) => {
  try {
    const page = JSON.parse(req.query.page);
    const pageSize = JSON.parse(req.query.pageSize);
    const Users = await userService.getUsers(page,pageSize);
    console.log("Users final :",Users)
    if (Users) {
      return res.status(200).send({
        message: "User fetched Successfully",
        data:Users.users,
        totalPages:Users.totalPages
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message, 
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("controller")
    console.log(req.params.id)
    const user = await userService.deleteuserService(req.params.id);
    if (user) {
      return res.status(200).send({
        message: "User Deleted Successfully",
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message, 
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateuserService(req.params.id,req.body);
    if (user) {
      return res.status(200).send({
        message: "User updated Successfully",
      });
    }
  } catch (err) {
    return res.status(400).send({
      message: err.message, 
    });
  }
};
