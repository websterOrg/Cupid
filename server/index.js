const path = require('path');
const express = require('express'); 
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user');
const userInfoRouter = require('./routes/userinfo');
const  chatRouter  = require('./routes/chat');
const   messageRouter  = require('./routes/message');
require('dotenv').config();
const PORT = 8000;

const MONGO_URL = process.env.MONGO_URL;


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user',userRouter);
app.use('/userInfo',userInfoRouter);
app.use('/chat',chatRouter);
app.use('/message',messageRouter);

const server = http.createServer(app);
mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startServer(){
    await mongoose.connect(MONGO_URL, {
    

    });
    server.listen(PORT,() => {
        console.log(`listening at port ${PORT}....`);
    })
}
startServer();
