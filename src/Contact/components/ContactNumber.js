import React from 'react'
import './css/ContactDetails.css'
const ContactNumber = (props) => {
    return (
        <>
            <div className="Contact-Maindiv" >
                <div className='Img-div'>
                    <img src={props.img} className='AdminImg' alt='' />
                </div>
                <div style={{ width: "68%", textAlign: "left", padding: "5px" }}>
                    <div className='Name-div'>{props.Name}</div>
                    <div className='Post-div'>{props.Post}</div>
                    <div className='Post-div'>{props.Number}</div>
                </div>
            </div>
        </>
    )
}

export default ContactNumber