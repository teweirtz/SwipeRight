import React from "react";
import './Chat.css'

const ChatHeader = () => {
    return (
    <div className = "chat_header">
        <div className = "profile">
            <div className = "img_container">
                <img src = ""/>
            </div>
            <h3>UserName</h3>
        </div>
        <i className="log_out_icon">⇦</i>
    </div>
    )
}

export default ChatHeader;