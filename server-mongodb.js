import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import Post from "./models/Post.js";

const app = express();
const port = 4000;

//mongoDB using
const db = "postsDB";
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/'+db);
}
main().catch(err => console.log(err));  

let lastId = 1;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET all posts
app.get("/posts", async(req, res) => {
  const allPosts = await  Post.find() ;
  //console.log(allPosts);
  res.status(200).json(allPosts);
});

// GET a specific post by id
app.get("/posts/:id", async(req, res) => {
  const id = parseInt(req.params.id);
  const foundData = await Post.findOne({id:id});
  if (foundData == false)
     { return res.status(404).json({ message: "Post not found" }); }
  res.status(200).json(foundData); 
});

// POST a new post
app.post("/posts", async(req, res) => {
  const newId = await (Post.find({}).sort({ id: -1 }).limit(1).then(post => post[0].id)) +1;
  const newPost = new Post({
    id: newId ,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: (new Date).toISOString()
  });
  await newPost.save();
  res.status(201).json(newPost);
});

// PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async(req, res) => {
  const id = parseInt(req.params.id);
  const updatedPost = await Post.updateOne({id:id}, req.body); console.log(updatedPost);
  if (!updatedPost.acknowledged) 
    return res.status(404).json({ message: "Post not found" });

  res.status(200).json(updatedPost); 
});

// DELETE a specific post by providing the post id
app.delete("/posts/:id", async(req, res) => {  
  const id = parseInt(req.params.id);
  const deletedPost =  await Post.findOneAndDelete({id:id});
  if( deletedPost==false ){
    res.status(404).json({"error":"Post is not found. can not be deleted!"});
  }
  else{
    res.status(200).json(deletedPost);
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
