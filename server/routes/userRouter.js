const express=require('express');
const userRouter=express.Router();
const {  getAllUser , signUp ,logIn } = require("../controller/user-controller");

userRouter.get("/",getAllUser);
userRouter.post("/signup", signUp);
userRouter.get("/login" , logIn);


module.exports=userRouter;