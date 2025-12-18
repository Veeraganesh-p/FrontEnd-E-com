import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contact.css';
function Contact() {
    return (
        <div className='contact-container'>
            <div className="main-div">
                <h1 className='contact-head'>CONTACT US</h1>
                <p>Feel free to reach out to us for any info</p>
            </div>
            <div className='low-contact'>
                <div className="low-contact-box">
                    
                    <p className='low-contact-head'><FaHome className='contact-icon' /> VISIT US</p>
                    <p>Chennai, Tamil Nadu, India</p>
                </div>
                <div className="low-contact-box">
                    
                    <p className='low-contact-head'><FaPhoneAlt className="contact-icon" />CALL US</p>
                    <p>+91 9360232782</p>
                </div>
                <div className="low-contact-box">
                    
                    <p className='low-contact-head'><FaEnvelope className="contact-icon" />MAIL US</p>
                    <p>veeramarket@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Contact