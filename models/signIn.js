var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  name: String,
  password: String,
  
});



productSchema.set("toJSON", { virtuals: true });
var signIn = mongoose.model("signups", productSchema);

module.exports = signIn;