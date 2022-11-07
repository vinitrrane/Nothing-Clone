import React from 'react';
import Button from './Button'
import './HeroHome.css';
import Hero1 from '../img/hero1.jpg'

const HeroHome = () => {
    return (
        <>
            <div className='herodiv flex'>
                <div className='heroimgdiv'>
                    <div className='herotitledark'>
                        <h1>ear (stick)</h1>
                    </div>
                    <img className='heroimg' src={Hero1}></img>
                </div>

                <div className='herotextdiv flex flex-col jus-e m-1'>
                    <div className='herotextp flex jus-sb aln-c'>
                        <p className='p-05 w-50'>Sublime.</p>
                        <p className='p-05 w-50'></p>
                    </div>
                    <h1 className='p-05'>Ear (stick)</h1>
                    <p className='p-05'>Tech you can’t feel. Leaving just space for sound to come to life. Powered by custom sound technology. Beautifully authentic, at any frequency.</p>
                    <div className='flex jus-sb mainbtndiv'>
                        <Button buttontext='( View on Flipkart )' />
                        <Button buttontext='( View on Myntra )' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroHome