const express = require("express");
const problem = require("../../models/problem_model");
let router = express.Router();

//Insert a record
router.post("/",  async (req, res) => {
    let prob = new problem();
    let findprob = await problem.findOne({ problemstate: req.body.problemstate });
    console.log(findprob);
    
    if (findprob==null){
    prob.category_id = req.body.category_id;
    prob.stagenumber = req.body.stagenumber;

    prob.problemstate = req.body.problemstate;
    prob.option1 = req.body.option1;
    prob.option2 = req.body.option2;
    prob.option3 = req.body.option3;
    prob.option4 = req.body.option4;
    prob.answer = req.body.answer;

    await prob.save();
    return res.send("Created!!!!!!!!!!!!");
    }

     if(req.body.category_id=="" || req.body.stagenumber=="" || req.body.problemstate=="" || req.body.option1==""){res.send("All fields must not be Empty")}
     if(findprob.problemstate==req.body.problemstate  ){res.send("Already Exist")}
  });



  router.get("/find",  async (req, res) => {
    let prob = new problem();
    let findprob = await problem.find({ category_id: req.body.category_id, stagenumber: req.body.stagenumber });
       res.send(findprob);

    console.log(findprob);
  });


module.exports = router;