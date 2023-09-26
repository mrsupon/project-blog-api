import mongoose from "mongoose";

// Creating a schema (similar to collection)
const postSchema = new mongoose.Schema({
    id:Number,
    title:String,
    content:String,
    author:String,
    date:String
});

// Creating a model under the schema//
const Post = mongoose.model("Post",postSchema);

export default Post;
 