var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  education: String
});



productSchema.set("toJSON", { virtuals: true });
var signUp = mongoose.model("signup", productSchema);

module.exports = signUp;