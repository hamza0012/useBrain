var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  
    category_id: String,
    stagenumber: String,

  problemstate: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String
  
});



productSchema.set("toJSON", { virtuals: true });
var problems = mongoose.model("problems", productSchema);

module.exports = problems;