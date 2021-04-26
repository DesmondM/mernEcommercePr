const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

env.config({path:'../.env' });

// mongo connection
//mongodb+srv://dbDes:<password>@cluster0.zklft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    'mongodb://localhost:27017/test',
    {
        useNewUrlParser: true, useUnifiedTopology:true
    }
);

app.use(bodyParser());

app.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Response from the server'
    });
});

app.post('/data', (req,res,next)=>{
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port number ${process.env.PORT}`);
});