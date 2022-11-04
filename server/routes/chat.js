const express = require('express'); 
const { createChat, findChat, userChats } = require('../controller/chatController.js');
const chatRouter = express.Router()

chatRouter.post('/', createChat);
chatRouter.get('/:userId', userChats);
chatRouter.get('/find/:firstId/:secondId', findChat);

module.exports = chatRouter