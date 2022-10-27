import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Modalpopup = () => {
  return (
    <>
      <div className="modal-container">
        {/* --------- Cross icon for closing popup model -------- */}

        <ImCross className="cross-icon" />

        <div className="side-box">
          <img src="./images/Conversation-rafiki.svg" alt="" />
        </div>
        <div className="form-container">
          <h2>Create Account</h2>
          <div className="social-icons">
            <span>
              {/* ----------Google icon ------ */}
              <FcGoogle className="google-icon" />
            </span>
            <span>
              {/* ---------FaceBook icon -------- */}
              <BsFacebook className="facebook-icon" />
            </span>
          </div>
          <p>or use your email for registration!</p>

          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <span className="term-condition">
                i agree to the
                <a href=""> Terms </a>
                and
                <a href=""> Privacy Policy </a>
              </span>
              <input type="checkbox" />
            </div>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Modalpopup