import React from 'react'
import ReviewCard from '../components/ReviewCard'
import './Reviews.css'
const Reviews = () => {

    const reviews = [
        {
            id: 1,
            reviewimg: require('../img/review1.png'),
            reviewtext: '“A radical reinterpretation of mobile tech”',
        },
        {
            id: 2,
            reviewimg: require('../img/review2.png'),
            reviewtext: '“Nothing Phone (1) is the biggest launch of the year in the smartphone space”',
        },
        {
            id: 3,
            reviewimg: require('../img/review3.png'),
            reviewtext: '“The most hyped tech company in years”',
        },
    ]

    return (
        <>
            <div className='reviewsdiv flex jus-se'>
                <ReviewCard everyreview={reviews} />
            </div>

        </>
    )
}

export default Reviews