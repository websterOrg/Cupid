import React, { useState, useEffect, useRef } from "react";
const Nav = ({ setShowModal, setIsSignup }) => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
    const handleClick = () => {
      console.log("clicked");
      setIsSignup(false);
      setShowModal(true);
    };

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };
  
  

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const DrawerStyle = {
    background: "white",
    position: "fixed",
    display: "flex",
    padding: "30px 40px",
    top: "0",
    right: "0",
    height: "100vh",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
    flexDirection: "column",
    gap: "50px",
    transition: " 0.5s ease-out",
  };

  return (
    <nav>
      <div className="logo">
        <h2>Cupid</h2>
      </div>

      <div className="menu">
        <ul ref={drawerRef} style={openDrawer ? DrawerStyle : null}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <button className="login-btn" onClick={handleClick}>
              Login
            </button>
          </li>
        </ul>
      </div>

      <div className="active-bar" onClick={() => toggleDrawer(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
