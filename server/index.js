const express = require("express");
require("./config/db");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/',require('./routes'));

// app.use("/api",(req,res,next) =>{
//     res.send("hello")
// })

//define port

app.listen(5000, () => console.log("app started at 5000..."));
