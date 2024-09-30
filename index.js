const express = require("express");


const app = new express();
var PORT = 3000;
app.use(express.json());
const blogModel=require('./model');
require('./connection')
//Write missing code here and all the CRUD operations on the database
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/blogs',async(req,res)=>{
  try{
    const data = await blogModel.find();
    res.status(200).send(data);
  }catch(error){
    res.status(404).send(error);
  }
})

app.post('/addBlogs',async(req,res)=>{
  try{
    var item = req.body;
    const data1 = new blogModel(item);
    const saveddata = await data1.save();
    res.status(200).send('Post Successful')

  }catch(error){
    res.status(404).send('Post Unsuccessful')
  }
})

app.put('/editBlogs/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const data = await blogModel.findByIdAndUpdate(id,req.body);
    res.status(200).send('Update successful');
  }catch(error){
    res.status(404).send('Update unsuccessful');
  }
})

app.delete('/deleteBlogs/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const data = await blogModel.findByIdAndDelete(id);
    res.status(200).send('Delete Successful');
  }catch(error){
    res.status(404).send('Delete unsuccessful');
  }
})



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
