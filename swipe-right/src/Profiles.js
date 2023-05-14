import React, {useState} from 'react';
import "./Profiles.css"

function Profiles() {

  const [people, setPeople] = useState([
    {
      name: 'Taylor Weirtz'
    }
  ]);

  return (
    <div className="profiles">
    {people.map((person) => (
      <h1>{person.name}</h1>
    ))}
    </div>
  )
}

export default Profiles;