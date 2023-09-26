import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
//import mongoose from "mongoose";
//import Post from "./models/Post.js";

const app = express();
const port = 4000;

// In-memory data store
const posts = JSON.parse(fs.readFileSync(new URL('./data.json', import.meta.url)));
// mongoDB using
// const db = "postsDB";
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/'+db);
// }
// main().catch(err => console.log(err));
 
let lastId = 1;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//
//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  //const allPosts =  Post.find();console.log(allPosts);
    res.json(posts);
}); 
// //CHALLENGE 2: GET a specific post by id
// app.get("/posts/:id",async(req, res) => { 
//   const id = parseInt(req.params.id);
//   const foundData = await Post.findById(id);
//   //const foundData = (posts).find((post)=>(post.id ===id));
//   res.sendStatus(200).json(foundData);
// }); 
// //CHALLENGE 3: POST a new post
// app.post("/posts", async(req, res) => { 
//   const newPost = new Post({
//     id: ++(Post.length) ,
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author,
//     date: (new Date).toISOString()
//   });
//   await newPost.save();
//   res.sendStatus(201).json(newPost);
// });
// //CHALLENGE 4: PATCH a post when you just want to update one parameter
// app.patch("/posts/:id", async(req, res) => { 
//   const id = parseInt(req.params.id);
//   await Post.updateOne({id:id}, req.body);
//   res.sendStatus(200).json(posts[index]); 
// });
// //CHALLENGE 5: DELETE a specific post by providing the post id.
//   app.delete("/posts/:id", async(req, res) => { 
//     const id = parseInt(req.params.id);
//     const foundData = await Post.findById(id);
//     if( foundData ){
//       const deletedPost =  await Post.findByIdAndDelete(id);
//       res.sendStatus(200).json(deletedPost);
//     }
//     else{
//       res.status(404).json({"error":"joke with id:"+id+" not found. can not be deleted!"});
//     }
//   });
//https://dev.to/franciscomendes10866/setup-mongodb-with-mongoose-and-express-4c58


app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

