import React from 'react';
import './Button.css'

const Button = ({ buttontext, classname }) => {
    return (
        <button className={'p-05 ' + classname}> {buttontext}</button >
    )
}


export default Button