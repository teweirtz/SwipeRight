import React, {useState, useEffect} from "react"
import TinderCard from 'react-tinder-card'
import ChatBox from '../Components/ChatBox'
import {useCookies} from 'react-cookie'
import axios from 'axios'
 
const Profile = () => {
    const [user, setUser] = useState(null)
    const [genderedUsers, setGenderedUsers] = useState(null)
    const [lastDirection, setLastDirection] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const userId = cookies.UserId


    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="profile">
            <ChatBox/>
            <div className = "swipe_container">
                <div className="card_container">
                {characters?.map((character) =>
                            <TinderCard
                                className="swipe"
                                key={character.name}
                                onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                                <div
                                    style={{backgroundImage: "url(" + character.url + ")"}}
                                    className="card">
                                    <h3>{character.name}</h3>
                                </div>
                            </TinderCard>
                )}
                <div className="swipe_info">
                    {lastDirection ? <p> You swiped {lastDirection}</p> : <p/>}
                </div>
                </div>
            </div>
        </div>
    )
 }

export default Profile;