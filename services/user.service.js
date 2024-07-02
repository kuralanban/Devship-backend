const db = require("../models");

module.exports = {
  validateUserService: async (data) => {
    try{
        const validateUser = await db.users.findOne({
          $or: [
            { email: data.email },
            { username: data.email }
          ]
        });
  // Dont have time to implement JWT so just sent the response
        if(validateUser && validateUser.length!==0){
          if (data.password===validateUser.password)  return validateUser 
          else throw new Error("Invalid password");
        }
        else throw new Error("Username / email doesn't exists");
    }
    catch(err){
        throw err
    }
  },
  saveUserService: async (data) => {
    try {
      const existingUser = await db.users.find({
        $or: [
          { email: data.email },
          { username: data.username }
        ]
      });
      if (existingUser.length != 0) {
        throw new Error("Username / email already exists");
      } else {
        const saveUser = await db.users.create(data); 
        if (saveUser) {
          return saveUser;
        } else {
          throw new Error("User creation failed");
        }
      }
    } catch (err) {
      throw err; 
    }
  },
}  
