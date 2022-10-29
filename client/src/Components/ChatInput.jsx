import React,{useState} from 'react'
import { IoSend } from "react-icons/io5";
import './styles/chatContainer.css'
const ChatInput = () => {
    const [textarea, setTextArea] = useState(null);
  return (
      <>
          <div className="chat-input">
              
              <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)}
              placeholder="Type your message here..."
              />
        
              <IoSend className='msg-send'/>
          </div>
      </>
  )
}

export default ChatInput