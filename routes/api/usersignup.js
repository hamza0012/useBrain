const express = require("express");

const signUp = require("../../models/signup");
let router = express.Router();

//Insert a record
router.post("/",  async (req, res) => {
    let signupsamp = new signUp();
    let finduser = await signUp.findOne({ name: req.body.name });
    console.log(finduser);
    
    if (finduser==null){
    signupsamp.name = req.body.name;
    signupsamp.password = req.body.password;
    signupsamp.age = req.body.age;
    signupsamp.education = req.body.education;
    await signupsamp.save();
    return res.send("Created!!!!!!!!!!!!");
    }

     if(req.body.name=="" || req.body.password=="" || req.body.age=="" || req.body.education==""){res.send("All fields must not be Empty")}
     if(finduser.name==req.body.name || finduser.password==req.body.password){res.send("Already Exist")}
  });

module.exports = router;