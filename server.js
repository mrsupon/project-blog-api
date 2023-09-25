import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 4000;

// In-memory data store
const posts = JSON.parse(fs.readFileSync(new URL('./data.json', import.meta.url)));

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
    res.json(posts);
});  
//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => { 
  const id = parseInt(req.params.id);
  const foundData = (posts).find((post)=>(post.id ===id));
  res.json(foundData);
}); 
//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => { 
  const newData ={
    id: posts.length +1 ,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date()
  }
  posts.push(newData);
  res.json(posts.slice(-1));
});
//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => { 
  const id = parseInt(req.params.id);
  const foundData = (posts).find((post)=>( post.id===id )); 
  const newData ={
    id: foundData.id ,
    title: req.body.title||foundData.title,
    content: req.body.content||foundData.content,
    author: req.body.author||foundData.author,
    date: (new Date())
  } 
  console.log(newData);
  const index = posts.findIndex( (post)=>(post.id === id)  );
  posts[index] = newData;
  res.json(posts[index]); 
});
//CHALLENGE 5: DELETE a specific post by providing the post id.
  app.delete("/posts/:id", (req, res) => { 
    const id = parseInt(req.params.id);
    const index = posts.findIndex( (post)=>(post.id === id)  );
    if( index >-1){
      posts.splice(index, 1);
      res.sendStatus(200);
    }
    else{
      res.status(404).json({"error":"joke with id:"+id+" not found. can not be deleted!"});
    }
  });



app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
