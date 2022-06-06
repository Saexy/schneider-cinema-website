import React from 'react';

import SendEmail from '../SendEmail';
import { FaInstagram,FaFacebook,FaWifi } from 'react-icons/fa'

import "./style.css"

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-body">
                <div className='title'>CONTACT</div>
                <SendEmail></SendEmail>
                <div className='medias'>
                    <a target="_blank" href="#"><FaWifi></FaWifi></a>
                    <a target="_blank" href="https://www.facebook.com/schneidercinema"><FaFacebook></FaFacebook></a>
                    <a target="_blank" href="https://www.instagram.com/schneidercinema/?igshid=YmMyMTA2M2Y="><FaInstagram></FaInstagram></a>
                </div>
            </div>
        </div>
    )
}
 
export default Footer;