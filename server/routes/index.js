const express=require('express');
//use express.router
const router=express.Router();

// router.get('/',(req,res)=>{
//     res.send("hello");
// })
router.use('/api/users',require('./userRouter'));
router.use('/api/blogs',require('./blogRouter'));


module.exports=router;