import express from "express";
import mongoose from "mongoose";

//// Connecting to DB////
 
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/postsDB');
}
 
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

// const post = new Post({
//     id: 1,
//     title:"The Rise of Decentralized Finance",
//     content:"Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
//     author:"Alex Thompson",
//     date:"2023-08-01T10:00:00Z",
// });
// console.log(post.date);
// post.save();


// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
 
// const Person = mongoose.model("Person", personSchema);
 
// const person = new Person ({
//   name: "John",
//   age: 37
// })
 
// person.save();
 
// const kiwi = new Fruit ({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
 
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
 
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture"
// });
 
// Fruit.insertMany([kiwi, orange, banana]).then (function () {
//   console.log("Successfully saved all the fruits to fruitsDB.");
// }) .catch(function (err) {
//   console.log(err);
// });

// mongoDB using
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.createConnection("mongodb://127.0.0.1:27017/postsDB");

//     const postSchema = new mongoose.Schema({
//     id:Number,
//     title:String,
//     content:String,
//     author:String,
//     date:Date
//     });
//     const Post = mongoose.model("Post",postSchema);
//     const post = new Post({
//     id: 2,
//     title:"The Rise of Decentralized Finance",
//     content:"Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
//     author:"Alex Thompson",
//     date:"2023-08-01T10:00:00Z",
//     });

//     await post.save();

// }