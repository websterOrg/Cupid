import './styles/popupmodal.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Modalpopup = ({ setShowModal, isSignup, setIsSignup }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const handleClick = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (isSignup && (password !== confirmPassword)) {
        setError("Password does not match!")
      }
      else {
        console.log("make a post request to our database");

      }
    }
    catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <div className="outside-container">
        <div
          className="modal-container"
          style={!isSignup ? { flexDirection: "row-reverse" } : null}
        >
          {/* --------- Cross icon for closing popup model -------- */}

          <ImCross className="cross-icon" onClick={handleClick} />

          <div
            className="side-box"
            style={
              !isSignup ? { marginLeft: "20px", marginRight: "-150px" } : null
            }
          >
            <img
              src={
                isSignup
                  ? "./images/Conversation-rafiki.svg"
                  : "./images/happy_couple.svg"
              }
              alt=""
              style={!isSignup ? { top: "60%" } : null}
            />
          </div>

          <div className="form-container">
            <h2>{isSignup ? "Create Account" : "Log In"}</h2>
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

            <p>
              or use your email for {isSignup ? "registration!" : "sign in!"}{" "}
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="Name"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                id="password"
                name="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              {isSignup && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="ConfirmPassword"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}

              {isSignup && (
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
              )}

              <input
                type="submit"
                onClick={() => {
                  if (isSignup) navigate("/Form");
                }}
              />

              <p>{error}</p>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Modalpopup;
