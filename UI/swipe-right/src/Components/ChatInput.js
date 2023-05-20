import React, {useState} from "react";
import './Chat.css'

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)
    return (
        < div className = "chat_input">
            <textarea value={textArea} onChange = {(e) => setTextArea(e.target.value)}/>
            <button>Submit</button>
        </div>
    )
}

export default ChatInput; 