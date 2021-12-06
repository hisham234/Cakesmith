import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './ContactUs.css';

function ContactUs(){

    

return(
<div>   

            
             <Header/>
                
     <div className="contactBody">
     <div className="bg-image-Contact"></div>
        <div className="contact-wrap">

                        <div className="contactDetails">
                            <h1>Contact Info</h1>
                            <div className="MainDetailDiv">
                                    <div  className="detailDiv flex">
                                        <img className="detailImg" src="./icons/phone-2.svg" alt=""/>
                                        <div>
                                            <h2>Call us: </h2>
                                            <p>(+92) 123 456 789</p>
                                        </div>
                                    </div>
                                    <div  className="detailDiv flex">
                                        <img className="detailImg" src="./icons/bag-2.svg" alt=""/>
                                        <div>
                                            <h2>E-mail: </h2>
                                            <p>support@CakeSmith.com</p>
                                        </div>
                                    </div>
                                    <div  className="detailDiv flex">
                                        <img className="detailImg" src="./icons/clock-2.svg" alt=""/>
                                        <div>
                                            <h2>Working Hours: </h2>
                                            <p>Mon - Sat (8.00am - 12.00am)</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    <div className="contact-form">
                        <h1>Send a Message</h1>
                        <form>
                            <input type="text" placeholder="Full Name" pattern="[a-zA-Z]+" title="Name can't contain letters" className="contact-form-input"/>
                            <input type="text" placeholder="Email" maxLength="30" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Incorrect email format" className="contact-form-input"/>
                            <input type="text" placeholder="Subject" maxLength="30" className="contact-form-input"/>
                            <textarea placeholder="Message" className="contact-form-textarea"></textarea>
                            <input type="submit" value="SUBMIT" className="contact-form-btn"/>
                        </form>
                    </div>
            </div>
            
	</div>
    <Footer/>
        </div>
)
}

export default ContactUs;