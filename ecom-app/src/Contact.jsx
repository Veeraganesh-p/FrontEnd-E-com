import './Contact.css';

function Contact() {
    return (
        <div className='contact-page'>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for any information</p>
            
            <div className='contact-info'>
                <div className="contact-box">
                    <h3>Visit Us</h3>
                    <p>Chennai, Tamil Nadu, India</p>
                </div>
                <div className="contact-box">
                    <h3>Call Us</h3>
                    <p>+91 9360232782</p>
                </div>
                <div className="contact-box">
                    <h3>Email Us</h3>
                    <p>veeramarket@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Contact