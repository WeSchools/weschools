var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    mongoose = require('mongoose');

// Database
mongoose.connect('mongodb://localhost/ecomm_database');

var Schema = mongoose.Schema;  

var Product = new Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    style: { type: String, unique: true },  
    modified: { type: Date, default: Date.now }
});


var ProductModel = mongoose.model('Product', Product);  

/*
ProductModel.create(
[
{  
    title: "Orange",  
    description: "Orange from North",  
    style: "Fruit",  
    modified: Date.Now
}
],
function (err, product) {
    if (!err) {
      return console.log(products);
    } else {
      return console.log(err);
    }
  }
)
*/
ProductModel.find(function (err, products) {
    if (!err) {
      return console.log(products);
    } else {
      return console.log(err);
    }
  });
