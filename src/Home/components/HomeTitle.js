import React from 'react';
import '../css/Title.css';
const TitleContainer=(props)=>{
    return(
        <div className='title-div-container'>   
            <h1>{props.title}</h1>
        </div>
    )
}
export default TitleContainer