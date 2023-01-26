import React from 'react'
import './DropDown.css'
import Header from '../img/Header.jpg'


const DropDown = (props) => {

    return (
        <div className='dropDown fadeIn' onMouseLeave={props.mouseout}>
            <ul className=' flex jus-se aln-c w-100' style={{}}>
                <li>
                    <a href='#home'>
                        Nothing (R)
                    </a>
                </li>
                <li>
                    <a id='productTag'

                    >
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
                    <a href='#store' >
                        Store
                    </a>
                </li>
                <li>
                    <a href='#login' >
                        Login
                    </a>
                </li>
            </ul>
            <div className='dropDownMenu flex'>
                <div className='imgDiv'>
                    <img src={Header} alt="" />
                </div>

                <ul>
                    <li>All Products</li>
                    <li><a href="#home">phone(1)</a></li>
                    <br />
                    <li><a href="#earstick">Audio</a></li>
                    <li><a href="#ear1">ear(1)</a></li>
                    <br />
                    <li>All Accessories</li>
                    <li><a href="#home">phone(1) case</a></li>
                    <li><a href="#home">phone(1) screen protector</a></li>
                    <li><a href="#home">power 45w</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown