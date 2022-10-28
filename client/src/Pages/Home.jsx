import React, { useState } from "react";
import Nav from "../Components/Nav";
import Modalpopup from "../Components/Modalpopup";
import Footer from "./Footer";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignup(true);
  };

  
  return (
    <>
      <div className="home">
        {/* ------- animated Gif  -------- */}

        <iframe
          src="https://embed.lottiefiles.com/animation/95400"
          className="lottie_gif"
        ></iframe>

        {/* ------- NavBar Component -------- */}
        <Nav setShowModal={setShowModal} setIsSignup={setIsSignup} />
        {/* ------- Home page content wrapper ------- */}
        <div className="home--container">
          <div className="text-box">
            <h1>Find Your Life Partner</h1>
            <p>
              Simple register on our website and we will find the partner of
              your dreams.
              <br />
              In few simple steps your are joining the lareget Dating website!
            </p>
          </div>
          <div className="button-box">
            <button className="register-btn" onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
        {showModal && (
          <Modalpopup
            setShowModal={setShowModal}
            isSignup={isSignup}
            setIsSignup={setIsSignup}
          />
        )}
        {/* ---------Footer content ------- */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
