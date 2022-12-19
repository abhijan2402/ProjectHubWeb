import Contactcard from "../components/Contactcard";
import ContactDetails from "../components/ContactDetails";
import "./contact.css"
function Contact() {
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">Contact Us</button>
            </div>
            <div className="WholeContactDiv">
                <Contactcard />
                <ContactDetails />
            </div>
        </>
    )
}
export default Contact;