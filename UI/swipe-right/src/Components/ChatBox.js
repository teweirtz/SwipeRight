import React from "react";
import ChatHeader from './ChatHeader';
import Matches from './Matches';
import ChatDisplay from './ChatDisplay';
import './Chat.css'

const ChatBox = () => {
    return (
        <div className="chat_box">
            <ChatHeader/>
        <div>
            <button className="option">Matches</button>
            <button className="option">Chat</button>
        </div>
        <Matches/>
        <ChatDisplay/>
        </div>
    )
}

export default ChatBox;