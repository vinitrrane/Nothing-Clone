import React from 'react';
import './ReviewCard.css'


const ReviewCard = (props) => {

    return (
        <>
            {
                props.everyreview.map((reviews) => (
                    <div className='reviewcard flex flex-col jus-s w-33' key={reviews.id}>
                        <div className='reviewimgdiv flex'>
                            <img className='reviewimg' src={reviews.reviewimg}></img>
                        </div>
                        <div className='reviewtextdiv'>
                            <p>{reviews.reviewtext}</p>
                        </div>
                    </div>
                )
                )
            }



        </>
    )
}

export default ReviewCard