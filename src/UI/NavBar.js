import React from 'react';
import { FaChevronDown } from "react-icons/fa";

import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className='navbar flex flex-w jus-c' >
                <a href="#"></a>
                <ul className='flex jus-se aln-c w-100'>
                    <li>
                        <a href="#" className='navlink'>Nothing (R)</a>
                    </li>
                    <li>
                        <a href="#" className='navlink'>Product <FaChevronDown /></a>
                    </li>
                    <li>
                        <a href="#" className='navlink'>Store</a>
                    </li>
                    <li >
                        <a href="#" className='navlink'>Login</a>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default NavBar;