import React, {useState} from "react"
import './Chat.css'
import axios from "axios"

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)

    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', { message })
            getUserMessages()
            getClickedUsersMessages()
            setTextArea("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        < div className = "chat_input">
            <textarea value={textArea} onChange = {(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button" onClick={addMessage}>Submit</button>
        </div>
    )
}

export default ChatInput