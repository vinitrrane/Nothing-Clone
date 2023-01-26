import React, { useState } from "react";
import "./MobileNav.css";

const MobileNav = (props) => {

  const [mobDropDown, setMobDropDown] = useState(false)

  return (
    <div className={`mobileMenu ${props.className}`}>
      <a

        className='mobileMenuIcon'
        onClick={props.onclick}>
        <svg width="6" height="14" viewBox="0 0 6 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2C1.56 2 2 1.56 2 0.999999C2 0.439999 1.56 -9.53674e-07 1 -9.53674e-07C0.44 -9.53674e-07 1.49012e-08 0.439999 1.49012e-08 0.999999C1.49012e-08 1.56 0.44 2 1 2ZM3 5C3.56 5 4 4.56 4 4C4 3.44 3.56 3 3 3C2.44 3 2 3.44 2 4C2 4.56 2.44 5 3 5ZM5 8C5.56 8 6 7.56 6 7C6 6.44 5.56 6 5 6C4.44 6 4 6.44 4 7C4 7.56 4.44 8 5 8ZM3 11C3.56 11 4 10.56 4 10C4 9.44 3.56 9 3 9C2.44 9 2 9.44 2 10C2 10.56 2.44 11 3 11ZM1 14C1.56 14 2 13.56 2 13C2 12.44 1.56 12 1 12C0.44 12 1.49012e-08 12.44 1.49012e-08 13C1.49012e-08 13.56 0.44 14 1 14Z"></path>
        </svg>
      </a>

      <a href='#home'>Nothing (R)</a>
      <ul>
        <li><a href='#'>Products</a><a onClick={() => { setMobDropDown(!mobDropDown) }}

        ><svg className={mobDropDown ? 'openedMenu' : null} width="6" height="14" viewBox="0 0 6 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2C1.56 2 2 1.56 2 0.999999C2 0.439999 1.56 -9.53674e-07 1 -9.53674e-07C0.44 -9.53674e-07 1.49012e-08 0.439999 1.49012e-08 0.999999C1.49012e-08 1.56 0.44 2 1 2ZM3 5C3.56 5 4 4.56 4 4C4 3.44 3.56 3 3 3C2.44 3 2 3.44 2 4C2 4.56 2.44 5 3 5ZM5 8C5.56 8 6 7.56 6 7C6 6.44 5.56 6 5 6C4.44 6 4 6.44 4 7C4 7.56 4.44 8 5 8ZM3 11C3.56 11 4 10.56 4 10C4 9.44 3.56 9 3 9C2.44 9 2 9.44 2 10C2 10.56 2.44 11 3 11ZM1 14C1.56 14 2 13.56 2 13C2 12.44 1.56 12 1 12C0.44 12 1.49012e-08 12.44 1.49012e-08 13C1.49012e-08 13.56 0.44 14 1 14Z"></path>
          </svg></a>
        </li>
        {mobDropDown ? <ul className="mobDropDown">
          <li>All Products</li>
          <li><a href="#home">phone(1)</a></li>
          <li><br /></li>
          <li><a href="#earstick">Audio</a></li>
          <li><a href="#ear1">ear(1)</a></li>
          <li><br /></li>
          <li>All Accessories</li>
          <li><a href="#home">phone(1) case</a></li>
          <li><a href="#home">phone(1) screen protector</a></li>
          <li><a href="#home">power 45w</a></li>
        </ul> : null}
        <li><a href='#store'>Store</a><a
        ><svg width="6" height="14" viewBox="0 0 6 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2C1.56 2 2 1.56 2 0.999999C2 0.439999 1.56 -9.53674e-07 1 -9.53674e-07C0.44 -9.53674e-07 1.49012e-08 0.439999 1.49012e-08 0.999999C1.49012e-08 1.56 0.44 2 1 2ZM3 5C3.56 5 4 4.56 4 4C4 3.44 3.56 3 3 3C2.44 3 2 3.44 2 4C2 4.56 2.44 5 3 5ZM5 8C5.56 8 6 7.56 6 7C6 6.44 5.56 6 5 6C4.44 6 4 6.44 4 7C4 7.56 4.44 8 5 8ZM3 11C3.56 11 4 10.56 4 10C4 9.44 3.56 9 3 9C2.44 9 2 9.44 2 10C2 10.56 2.44 11 3 11ZM1 14C1.56 14 2 13.56 2 13C2 12.44 1.56 12 1 12C0.44 12 1.49012e-08 12.44 1.49012e-08 13C1.49012e-08 13.56 0.44 14 1 14Z"></path>
          </svg>
        </a></li>
        <li id="loginMenu"><a href='#login'>Login</a></li>
      </ul>
    </div >
  );
};

export default MobileNav;
