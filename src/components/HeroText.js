import React from 'react'
import Button from './Button'
import './HeroText.css'

const HeroText = (props) => {
    return (
        <>
            <div className='herotextdiv flex flex-col jus-e m-1'>
                <div className='herotextp flex jus-sb aln-c'>
                    <p className='p-05 w-50'>{props.herotop1}</p>
                    <p className='p-05 w-50'>{props.herotop2}</p>
                </div>
                <h1 className='p-05'>{props.heroheadtext}</h1>
                <p className='p-05'>{props.heromaintext}</p>
                <div className='flex jus-sb mainbtndiv'>
                    <Button buttontext={props.herobutton1} /><Button buttontext={props.herobutton2} />
                </div>
            </div>
        </>
    )
}

export default HeroText