const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
blogTitle : String,
blogContent : String,
author : String,
createdAt : Date
});


//Write missing code here

const blogData = mongoose.model('blog',schema)
module.exports = blogData;