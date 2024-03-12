// Imorting and creating express
const express= require('express');
const app=express();

// Importing dotenv 
require("dotenv").config();

// Midelware 
app.use(express.json());

// Connection to the database through the connectDB file
const connectDB= require('./config/connectDB')
connectDB();

app.use('/api/contact',require('./Routes/contact'));

const PORT = process.env.PORT
app.listen(PORT,(err)=>{
    err? console.log(err):
    console.log(`Le  serveur fonctionne sur le port:http://localhost:${PORT}`);
     
      
});      