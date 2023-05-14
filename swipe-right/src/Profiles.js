import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./Profiles.css"

function Profiles() {

  const [people, setPeople] = useState([
    {
      name: 'Taylor Weirtz',
      url: ""
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="profileCards">
      <div className="profileCards__cardContainer">
    {people.map((person) => (
      <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        onSwipe={(dir) => swiped(dir, person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}
      >
        <div
          style={{ backgroundImage: `url(${person.url})`}}
          className="card"
          >
            <h3>{person.name}</h3>
          </div>
      </TinderCard>
    ))}
    </div>
  </div>
  );
}

export default Profiles;