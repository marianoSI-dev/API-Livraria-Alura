import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://alura:123@cluster0.4xqeqch.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;