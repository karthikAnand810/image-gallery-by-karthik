import React from 'react'
import './card.css';
const Card = ({ imgUrl, title, content, authorName, role, setOpenModal }) => {

    return (
        <>
            <div className='card-container' onClick={() => setOpenModal(true)}>
                <div className='card-more'>
                    <h4>Learn More</h4>
                </div>
                <div className="image-container">
                    <img src={imgUrl} alt={title} />
                </div>
                <div className="card-details">
                    <div className='card-title'>
                        <h2>{title}</h2>
                    </div>
                    <div className='card-content'>
                        <p>{content}</p>
                    </div>
                    <div className='footer'>
                        <p>{`${authorName} - ${role}`}</p>
                        <p>Nov25, 2020</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card