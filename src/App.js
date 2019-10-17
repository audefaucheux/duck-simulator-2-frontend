import React, { useState, useEffect } from "react";
import "./App.css";
import DuckContainer from "./containers/DuckContainer";
import API from "./adapters/API";
import AreaContainer from "./containers/AreaContainer"

function App() {
  const [ducks, setDucks] = useState([]);
  const [areas, setAreas] = useState([]);
  const [currentDuck, setCurrentDuck] = useState({
    id: 22,
    name: "Joaquin",
    gender: "male",
    alive: true,
    awake: true,
    hunger: 0,
    mood: "happy",
    image_url: "duck-template.jpg",
    user_id: 7,
    area_id: 5,
    created_at: "2019-10-17T12:15:50.160Z",
    updated_at: "2019-10-17T12:15:50.160Z"
  });
  const [currentArea, setCurrentArea] = useState({
    "id": 7,
    "name": "Flatiron Pond",
    "max_capacity": 10,
    "image_url": "area-template.png",
    "ducks": [
      {
        "id": 32,
        "name": "Joaquin",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 33,
        "name": "Oli",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 37,
        "name": "Polly",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 38,
        "name": "Angie",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 39,
        "name": "Sohaib",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 40,
        "name": "Ian",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 41,
        "name": "Will",
        "image_url": ""
      }
    ]
  },);

  // const [currentDuck, setCurrentDuck] = useState(null)
  // const [currentArea, setCurrentArea] = useState(null);

  useEffect(() => {
    API.getDucks().then(setDucks);
    API.getAreas().then(setAreas);
  }, []);

  return (
    <div>
      <DuckContainer {...{ ducks, currentDuck }} />
      <AreaContainer {...{ areas, currentArea }}   />
    </div>
  );
}

export default App;
