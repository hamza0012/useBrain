const express = require("express");
var category = require('../../models/catergory_model');
let router = express.Router();

//Insert a categories
router.post("/",  async (req, res) => {
    let catcamp = new category();
    let findcat = await category.findOne({ name: req.body.name });
    console.log(findcat);
    
    if (findcat==null){
    catcamp.name = req.body.name;
    catcamp.image = req.body.image;
    
    await catcamp.save();
    return res.send("Created!!!!!!!!!!!!");
    }

     if(req.body.name=="" || req.body.image=="" ){res.send("All fields must not be Empty")}
     if(findcat.name==req.body.name ){res.send("Already Exist")}
  });


  //get categories
  router.get("/", async (req, res) => {
    
    let allcat = await category.find({ });
    console.log(allcat);
    return res.send(allcat);
  });

module.exports = router;