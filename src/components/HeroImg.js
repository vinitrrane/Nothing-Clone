import React from 'react'
import './HeroImg.css'
import HeroTitle from './HeroTitle'

const HeroImg = (props) => {
    return (
        <>
            <div className='heroimgdiv'>
                <HeroTitle name={props.herotitle} class={props.titleclass} />
                <img className='heroimg' src={props.imgurl}></img>
            </div>
        </>
    )
}

export default HeroImg