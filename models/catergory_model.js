var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  name: String,
  image: String,
  
});

productSchema.set("toJSON", { virtuals: true });
var Category = mongoose.model("categories", productSchema);

module.exports = Category;