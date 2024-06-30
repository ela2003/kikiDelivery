import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img id='kiki' src={assets.logokiki} alt='' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia recusandae a! Eligendi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore quasi et ullam. Voluptas, sit sunt ullam praesentium voluptatibus saepe, sint minus aut provident sapiente odit ad quas maiores et.  architecto ad? Possimus recusandae sequi ratione dolorum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />


                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 78352789</li>
                        <li>contact@kikiDelivery.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
<p className="footer-copyright">Copywrite 2024 @ kiki.com-All Right Reserved.</p>
        </div>
    )
}

export default Footer
