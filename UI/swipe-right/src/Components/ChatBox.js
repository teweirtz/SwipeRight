import React from "react";
import './ChatBox.css';
import Chat from './ChatDisplay';
import Header from './Header';
import Matches from './Matches'

const ChatBox = () => {
    return (
        <div className="chat_box">
            <Header/>
        <div>
            <button className="option">Matches</button>
            <button className="option">Chat</button>
        </div>
        <Matches/>
        <Chat/>
        </div>
    )
}

export default ChatBox;