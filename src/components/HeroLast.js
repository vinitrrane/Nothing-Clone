import React from 'react'
import Button from './Button'
import './HeroHome.css';
import Hero1 from '../img/hero6.png'

const HeroLast = () => {
    return (
        <>
            <div className='herodiv flex'>
                <div className='heroimgdiv'>
                    <div className='herotitledark'>
                        <h1>support</h1>
                    </div>
                    <img className='heroimg' src={Hero1}></img>
                </div>

                <div className='herotextdiv flex flex-col jus-e m-1'>
                    <div className='herotextp flex jus-sb aln-c'>
                        <p className='p-05 w-50'>Nothing.</p>
                        <p className='p-05 w-50'>
                            Support.</p>
                    </div>
                    <h1 className='p-05'>Our new support services</h1>
                    <p className='p-05 lasthead'>We’ve completely redesigned our support services. More agents, new ways to contact us, device repairs and a brand new support portal. <br /><br />To fully take care of our Phone (1) experience.</p>
                    <div className='flex jus-sb mainbtndiv'>
                        <Button buttontext='( Learn More )' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroLast