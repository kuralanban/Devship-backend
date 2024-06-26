module.exports=(app)=>{
    var router=require("express").Router();
    const userController=require("../controllers/user.controller");

    router.post("/login",userController.validateUser);

    router.post("/register",userController.saveNewUser);

    app.use("/",router)
}