const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

env.config({path:'../.env' });

// mongo connection
//mongodb+srv://dbDes:<password>@cluster0.zklft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.zklft.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(()=>{
    console.log("The Mongo DB is conected china");
});


app.use(bodyParser());
app.use('/api', userRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port number ${process.env.PORT}`);
});