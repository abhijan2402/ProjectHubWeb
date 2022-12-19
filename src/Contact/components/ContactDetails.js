import React from 'react'
import ContactNumber from './ContactNumber'
// import ContactDetails from "../components/ContactDetails";
import "./css/ContactDetails.css"
function ContactDetails() {
    return (
        <div className='Main-div'>
            <h2 style={{ margin: "20px" }}>Customer Care</h2>
            <div>
                <ContactNumber Name="Abhishek" img="https://cdn-icons-png.flaticon.com/512/747/747376.png" Post="Web-Manager" Number="+91-7976114618" />
                <ContactNumber Name="Chirag" img="https://cdn-icons-png.flaticon.com/512/747/747376.png" Post="App-Manager" Number="+91-7073787709" />
                <ContactNumber Name="Aayushi" img="https://cdn-icons-png.flaticon.com/512/747/747376.png" Post="UI-Manager" Number="+91-8955909991" />
            </div>
            <div className='Bottom-info'>You can connect with us in working hours between 9am to 10pm</div>
        </div>
    )
}

export default ContactDetails