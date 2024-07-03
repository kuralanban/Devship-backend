module.exports=(app)=>{
    var router=require("express").Router();
    const userController=require("../controllers/user.controller");
    
    router.get("/users",userController.getAllUsers);
    
    router.post("/login",userController.validateUser);

    router.post("/register",userController.saveNewUser);

    router.put("/:id",userController.updateUser);

    router.delete("/:id",userController.deleteUser)

    app.use("/",router)
}