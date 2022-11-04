const messageModel  = require("../model/message.js")

addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  if(!chatId || !senderId || !text){
    res.status(500).json(error);
  }
  const message = new messageModel.create({
    chatId,
    senderId,
    text,
  });
  if(message)
   { res.status(200).json(result);
  }
  else {
    res.status(500).json(error);
  }
};

getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await messageModel.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}; 

module.exports = {
    addMessage,
    getMessages
}