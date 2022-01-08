const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');

//Middleware
/*
app.use('/posts',() => {
    console.log('Hello bhadwe')
})
*/
app.use(cors());
app.use(bodyParser.json())


//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts' , postsRoute);

//ROUTES 

app.get('/',(req,res) =>{
    res.send('We are at home');
})




//connect to db
mongoose.connect(process.env.DB_CONNECTION,() => {
    console.log('connected to DB')
})




app.listen(3000);