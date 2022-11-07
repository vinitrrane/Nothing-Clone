import React from 'react'
import Button from './Button'
import './HeroMain.css';
import Hero2 from '../img/hero2.jpg'

const HeroMain = () => {
    return (
        <div className='herodiv flex'>
            <div className='heroimgdiv'>
                <div className='herotitledark'>
                    <h1>phone (1)</h1>
                </div>
                <img className='heroimg' src={Hero2}></img>
            </div>
            <div className='herotextdiv flex flex-col jus-e m-1'>
                <div className='herotextp flex jus-sb aln-c'>
                    <p className='p-05 w-50'>Introducing.</p>
                    <p className='p-05 w-50'>Phone (1).</p>
                </div>
                <h1 className='p-05'>Pure instinct</h1>
                <p className='p-05'>Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.</p>
                <div className='flex jus-sb mainbtndiv'>
                    <Button classname='mainbtn' buttontext='Learn more' />
                </div>
            </div>
        </div>
    )
}

export default HeroMain