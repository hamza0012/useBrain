const express = require("express");
const signIn = require("../../models/signIn");
let router = express.Router();

//Insert a record
router.post("/",  async (req, res) => {
    
    let finduser = await signIn.findOne({ name: req.body.name });
    console.log(finduser);
    
    if (finduser==null){
    return res.send("NOT REGISTER");
    }

     if(req.body.name=="" || req.body.password=="" || req.body.age=="" || req.body.education==""){res.send("All fields must not be Empty")}
     if(finduser.name==req.body.name || finduser.password==req.body.password){res.send("Login Succesfully")}

     else{
         res.send("Error");
     }
  });

module.exports = router;