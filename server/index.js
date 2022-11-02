const path = require('path');
const express = require('express'); 
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user');
const userInfoRouter = require('./routes/userinfo');
require('dotenv').config();
const PORT = 8000;

const MONGO_URL = 'mongodb+srv://social_media:social_media123@nodeproject.dv7so.mongodb.net/cupit?retryWrites=true&w=majority';


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user',userRouter);
app.use('/userInfo',userInfoRouter);
mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startServer(){
    await mongoose.connect(MONGO_URL, {
    

    });
    app.listen(PORT,() => {
        console.log(`listening at port ${PORT}....`);
    })
}
startServer();
