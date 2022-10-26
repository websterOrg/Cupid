import React from 'react'
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Cupid</h2>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Images</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </div>

      <div className="active-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav
