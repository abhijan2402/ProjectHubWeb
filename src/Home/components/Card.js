import React from 'react';
import '../css/Card.css';
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div className='card-container'>
            <img
                src={props.imageLink}
                className='image-size'
                alt=''
            />
            <h3>Make your own {props.title}</h3>
            <Link to={'service'}>
                <button className='card-button'>
                    Contact Now
                </button>
            </Link>
        </div>
    )
}
export default Card;