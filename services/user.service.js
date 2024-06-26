const db = require("../models");

module.exports = {
  validateUserService: async (data) => {
    try{
        const validateUser = await db.users.find({
          $or: [
            { email: data.email },
            { username: data.username }
          ]
        });
  // Dont have time to implement JWT so just sent the response
        if(validateUser && validateUser.length!==0){
            return validateUser
        }
    }
    catch(err){
        return err
    }
  },
  saveUserService:(data) => {
    try{
      const existingUser = db.users.find({ email: data.email, username: data.username });
      if (existingUser) {
        throw new Error("Username / email already exists"); // Use new Error() for error creation
      }
      else{
        const saveUser = db.users.insertOne(data);
        if(saveUser){
            return saveUser
        }
      }
    }
    catch(err){
        return err
    }
  },
};
