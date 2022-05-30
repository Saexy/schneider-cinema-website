import React from 'react';

import SendEmail from '../SendEmail';
import { FaInstagram,FaFacebook,FaWifi } from 'react-icons/fa'

import "./style.css"

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-header">
                CONTACT
            </div>
            <div className="footer-body">
                <div className='socialmedias'>
                    <div className='title'>FOLLOW US</div>
                    <div className='medias'>
                        <a target="_blank" href="www.schneidercinema.com"><FaWifi></FaWifi></a>
                        <a target="_blank" href="https://www.facebook.com/schneidercinema"><FaFacebook></FaFacebook></a>
                        <a target="_blank" href="https://www.instagram.com/schneidercinema/?igshid=YmMyMTA2M2Y="><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <SendEmail></SendEmail>
            </div>
        </div>
    )
}
 
export default Footer;