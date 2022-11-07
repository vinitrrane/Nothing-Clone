import React from 'react'
import './HeroTitle.css'

const HeroTitle = (props) => {
    return (
        <>
            <div className='herotitle'>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}

export default HeroTitle