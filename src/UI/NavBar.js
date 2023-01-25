import React, { useState } from "react";
import DropDown from "./DropDown";
import MobileNav from "./MobileNav";
import "./NavBar.css";

const NavBar = (props) => {
  const [mobMenu, setMobMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const mouseOut = () => {
    setDropDown(!dropDown);

  };
  const onClick = () => {
    setMobMenu(!mobMenu);

  };


  return (
    <>
      <div className='navbar flex flex-w jus-c'>
        <a
          href='#mob'
          className='mobileIcon'
          onClick={() => setMobMenu(!mobMenu)}>
          <svg
            width='6'
            height='14'
            viewBox='0 0 6 14'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 2C1.56 2 2 1.56 2 0.999999C2 0.439999 1.56 -9.53674e-07 1 -9.53674e-07C0.44 -9.53674e-07 1.49012e-08 0.439999 1.49012e-08 0.999999C1.49012e-08 1.56 0.44 2 1 2ZM3 5C3.56 5 4 4.56 4 4C4 3.44 3.56 3 3 3C2.44 3 2 3.44 2 4C2 4.56 2.44 5 3 5ZM5 8C5.56 8 6 7.56 6 7C6 6.44 5.56 6 5 6C4.44 6 4 6.44 4 7C4 7.56 4.44 8 5 8ZM3 11C3.56 11 4 10.56 4 10C4 9.44 3.56 9 3 9C2.44 9 2 9.44 2 10C2 10.56 2.44 11 3 11ZM1 14C1.56 14 2 13.56 2 13C2 12.44 1.56 12 1 12C0.44 12 1.49012e-08 12.44 1.49012e-08 13C1.49012e-08 13.56 0.44 14 1 14Z'></path>
          </svg>
        </a>

        <ul className='flex jus-se aln-c w-100' style={{}}>
          <li>
            <a href='#home' className={`navlink ${props.class}`}>
              Nothing (R)
            </a>
          </li>
          <li>
            <a
              href='#product'
              className={`navlink dropLink ${props.class}`}
              onMouseOver={() => setDropDown(!dropDown)}>
              Product{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='6'
                viewBox='0 0 19 9'
                fill='currentColor'>
                <path d='M16.2 2.2C16.2 2.956 16.794 3.55 17.55 3.55C18.306 3.55 18.9 2.956 18.9 2.2C18.9 1.444 18.306 0.85 17.55 0.85C16.794 0.85 16.2 1.444 16.2 2.2ZM12.15 4.9C12.15 5.656 12.744 6.25 13.5 6.25C14.256 6.25 14.85 5.656 14.85 4.9C14.85 4.144 14.256 3.55 13.5 3.55C12.744 3.55 12.15 4.144 12.15 4.9ZM8.1 7.6C8.1 8.356 8.694 8.95 9.45 8.95C10.206 8.95 10.8 8.356 10.8 7.6C10.8 6.844 10.206 6.25 9.45 6.25C8.694 6.25 8.1 6.844 8.1 7.6ZM4.05 4.9C4.05 5.656 4.644 6.25 5.4 6.25C6.156 6.25 6.75 5.656 6.75 4.9C6.75 4.144 6.156 3.55 5.4 3.55C4.644 3.55 4.05 4.144 4.05 4.9ZM-1.18021e-07 2.2C-1.51067e-07 2.956 0.594 3.55 1.35 3.55C2.106 3.55 2.7 2.956 2.7 2.2C2.7 1.444 2.106 0.849999 1.35 0.849999C0.594 0.849999 -8.49749e-08 1.444 -1.18021e-07 2.2Z'></path>
              </svg>
            </a>
          </li>
          <li>
            <a href='#store' className={`navlink ${props.class}`}>
              Store
            </a>
          </li>
          <li>
            <a href='#login' className={`navlink ${props.class}`}>
              Login
            </a>
          </li>
        </ul>
        {dropDown ? <DropDown mouseout={mouseOut} /> : <></>}
      </div>

      {mobMenu ? <MobileNav onclick={onClick} /> : <></>}
    </>
  );
};

export default NavBar;
