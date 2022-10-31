import React,{useState} from 'react'
import { ImCross, ImHeart } from "react-icons/im";
import TinderCard from 'react-tinder-card'
import ChatContainer from '../Components/ChatContainer';
import './styles/dashboard.css'
const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age:22,
    },
    {
      name: "Erlich Bachman",
      url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age:20,
    },
    {
      name: "Monica Hall",
      url: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age:30,
    },
    {
      name: "Jared Dunn",
      url: "https://images.pexels.com/photos/2304113/pexels-photo-2304113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age:24,
    },
    {
      name: "Dinesh Chugtai",
      url: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age:19,
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <>
      <div className="wrapper">

        <ChatContainer />

        <div className="swipe-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div className="card-container">
                <div
                  className="imgBx"
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                ></div>

                <div className="profile-details">
                  <h3>
                    {character.name}, <span>{character.age}</span>
                  </h3>
                  <p>i love to design websites!</p>
                  {/* <div className="swipe-btn">
                    <button id="right-swipe-btn">
                      <ImCross className="cross" />
                    </button>
                    <button id="left-swipe-btn">
                      <ImHeart className="heart" />
                    </button>
                  </div> */}
                </div>
              </div>

            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard