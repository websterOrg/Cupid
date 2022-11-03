const express = require('express');
const { createUser, loginUser, getUser } = require('../controller/userController');
const { authorize } = require('../middleware/userauth')

const userRouter = express.Router();

userRouter.post('/',createUser);
userRouter.post('/login',loginUser);
userRouter.get('/getuser',authorize,getUser);


module.exports = userRouter
