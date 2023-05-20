import React, {useState} from "react";
import TinderCard from 'react-tinder-card';
import ChatBox from '../Components/ChatBox';
// import './Profile.css'
 
const Profile = () => {
    const characters = [
        {
            name: 'Taylor Weirtz',
            url: 'https://imgur.com/t/wholesome/i4jfe19'
        }
    ]
    const [lastDirection, setLastDirection] = useState()


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