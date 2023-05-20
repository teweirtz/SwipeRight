import React {useState} from "react";
import TinderCard from 'react-tinder-card';
import ChatBox from '../Components/ChatDisplay'
import './Profile.css'
 
const Profile = () => {
    const characters = db
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
            <MessageContainer/>
            <div className = "swipe_container">
                <div className="card_container">
                {filteredGenderedUsers?.map((genderedUser) =>
                            <TinderCard
                                className="swipe"
                                key={genderedUser.user_id}
                                onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                <div
                                    style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                    className="card">
                                    <h3>{genderedUser.first_name}</h3>
                                </div>
                            </TinderCard>
                )}
                <div className="swipe_info">
                    {lastDirections ? <p> You swiped {lastDire4ction}</p> : <p/>}
                </div>
                </div>
            </div>
        </div>
    )
 }

export default Profile;