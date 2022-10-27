import React from "react";
import Nav from "../Components/Nav";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        {/* ------- animated Gif  -------- */}
        <iframe
          src="https://embed.lottiefiles.com/animation/95400"
          className="lottie_gif"
        ></iframe>
        {/* ------- NavBar Component -------- */}
        <Nav />
        {/* ------- Home page content wrapper ------- */}
        <div className="home--container">
          <div className="text-box">
            <h1>Find Your Life Partner</h1>
            <p>
              Simple register on our website and we will find the partner of
              your dreams. <br />
              In few simple steps your are joining the lareget Dating website!
            </p>
          </div>

          <div className="button-box">
            <button className="register-btn">Register</button>
            <button className="login-btn"> Login </button>
          </div>
        </div>

        {/* ---------Footer content ------- */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
