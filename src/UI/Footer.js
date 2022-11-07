import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer flex flex-c'>
                <div className='footerlinks flex flex-col jus-se'>
                    <div className='mainlinks flex jus-sb '>
                        <ul>
                            <li><p>Products</p></li>
                            <li><a>phone ( 1 )</a> </li>
                            <li><a>ear ( 1 )</a> </li>
                            <li><a>ear (stick)</a> </li>
                            <li><a>accessories</a> </li>
                            <li><a></a> </li>
                        </ul>
                        <ul>
                            <li><p>Company</p></li>
                            <li><a>ABOUT US</a> </li>
                            <li><a>CAREERS</a> </li>
                            <li><a>COMMUNITY</a> </li>
                            <li><a>NEWSROOM</a> </li>
                            <li><a>BUSINESS ENQUIRY</a> </li>
                        </ul>
                        <ul>
                            <li><p>Support</p></li>
                            <li><a>SUPPORT CENTRE</a> </li>
                            <li><a>CONTACT US</a> </li>
                            <li><a>SERVICE CENTRE</a> </li>
                            <li><a>E-WASTE MANAGEMENT</a></li>
                            <li><a>FIND A STORE</a> </li>
                        </ul>
                        <ul>
                            <li><p>Social</p></li>
                            <li><a>INSTAGRAM</a> </li>
                            <li><a>YOUTUBE</a> </li>
                            <li><a>TWITTER</a> </li>
                            <li><a>TIKTOK</a> </li>
                            <li><a>DISCORD</a> </li>
                        </ul>
                    </div>
                    <div className=' blankfooterdiv'></div>
                    <div className='otherlinks'>
                        <ul className='flex jus-sb'>
                            <li> <a>PRIVACY POLICY</a> </li>
                            <li> <a>WARRANTY POLICY</a> </li>
                            <li> <a>ACCEPTABLE USE POLICY</a> </li>
                            <li> <a>USER AGREEMENT</a> </li>
                            <li> <a>ALL MAJOR CREDIT CARDS AND CRYPTO ACCEPTED</a> </li>
                        </ul>
                    </div>
                </div>
                <div className='footertext flex flex-col aln-fe jus-se'>
                    <div className='footeruptext'>
                        <p>JOIN OUR MAILING LIST</p>
                        <p>[  EMAIL ADDRESS  ]</p>
                    </div>
                    <div className='blankfootertext'></div>
                    <div className='footerdowntext'>
                        <p>INDIA / (INR)</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer