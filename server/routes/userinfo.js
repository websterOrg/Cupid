const express = require('express');
const { 
     getUserDetail,
     createUserDetail, 
     addUserMatchDetail, 
     GetUserByGender, 
     getUsersBymatch } = require('../controller/userDetailController');
const { authorize } = require('../middleware/userauth');


const userInfoRouter = express.Router();

userInfoRouter.get('/',authorize,getUserDetail);
userInfoRouter.post('/',authorize,createUserDetail);
userInfoRouter.put('/',authorize,addUserMatchDetail);
userInfoRouter.get('/getUserbygender',GetUserByGender);
userInfoRouter.get('/getUsers',getUsersBymatch);




module.exports = userInfoRouter;
