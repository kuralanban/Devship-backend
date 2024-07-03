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
  getUsers: async (page,pageSize) => {
    try{
      const skip = (page - 1) * pageSize;
      const users = await db.users.find({}).skip(skip).limit(pageSize);
      const totalUsers = await db.users.countDocuments();
      const totalPages = Math.ceil(totalUsers / pageSize);      
        if(users){
          return {users:users,totalPages:totalPages}
        }
      }
    catch(err){
        throw err
    }
},
deleteuserService:async (id) => {
  try{
    console.log(id)
    const users = await db.users.deleteOne({_id:id})
      if(users){
        return users
      }
    }
  catch(err){
      throw err
  }
},
updateuserService:async (id,data) => {
  try{
    const users = await db.users.updateOne({_id:id,data})
      if(users){
        return users
      }
    }
  catch(err){
      throw err
  }
},
}