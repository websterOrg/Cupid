import React from 'react'
import { ImCross, ImHeart } from "react-icons/im";

import ChatContainer from '../Components/ChatContainer';
import './styles/dashboard.css'
const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        <ChatContainer />

        <div className="swipe-container">
          <div className="card-container">
            <img
              src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-pic"
            />

            <div className="profile-details">
              <h3>
                Alina smith, <span>25</span>
              </h3>
              <p>i love to design websites!</p>
              <div className="swipe-btn">
                <button id="right-swipe-btn">
                  <ImCross className="cross" />
                </button>
                <button id="left-swipe-btn">
                  <ImHeart className="heart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard