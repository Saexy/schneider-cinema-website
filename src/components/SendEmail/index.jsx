import React from 'react';
import { useState } from 'react';

import emailjs from '@emailjs/browser';

import { BsMessenger } from 'react-icons/bs'

import './style.css'

const SendEmail = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleClickSendEmail = (e) => {
        e.preventDefault()

        if(name == "" || email == "" || message == "" || !email.includes("@")){
            alert("You must fill in all fields correctly.")
        }else{
            emailjs.sendForm('gmailMessage', 'template_28sx95v', e.target, 'zMLhZ4J9RqaYfljxd')
            .then((result) => {
                alert("Email sent successfully, until you wait for a reply to your email.")
            }, (error) => {
                alert("Error.")
            });
        }
    }

    return (
        <div className="sendmail">
            <form onSubmit={(e) => handleClickSendEmail(e)}>
                <div className='sendmail-header'>
                    <p>SEND US A MESSAGE</p>
                </div>
                <div className='sendmail-body'>
                    <div className='text-field'>
                        <p>Name:</p>
                        <input type="text" onChange={(e) => setName(e.target.value)} name="name"/>
                    </div>
                    <div className='text-field'>
                        <p>Email:</p>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email"/>
                    </div>
                    <div className='text-field'>
                        <p>Message:</p>
                        <textarea type="text" onChange={(e) => setMessage(e.target.value)} name="message"/>
                    </div>
                </div>
                <div className="sendmail-footer">
                    <input type="submit" className='form-button' value="SEND MAIL" />
                </div>
            </form>
            
        </div>
    );
}

export default SendEmail;