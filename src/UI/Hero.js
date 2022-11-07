import React from 'react'
import HeroText from '../components/HeroText'
import HeroImg from '../components/HeroImg'
import './Hero.css'




const Hero = (props) => {

    return (
        <>
            {
                props.herodata.map((hero) => (
                    <div className='herodiv flex' key={hero.id}>
                        <HeroImg imgurl={hero.heroimg} herotitle={hero.herotitle} />
                        <HeroText herotop1={hero.title1} herotop2={hero.title2} heroheadtext={hero.heading} heromaintext={hero.details} herobutton1={hero.button1} herobutton2={hero.button2} />
                    </div>))
            }


        </>
    )
}

export default Hero