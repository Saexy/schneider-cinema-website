import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SendEmail from '../../components/SendEmail';

// import Video from '../../assets/videos/home_background.mp4'
import About from '../../assets/images/about_2.png'

import './style.css'

const Home = () => {

    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate(`/team`)
    }

    $(window).on("scroll", () => {
        const windowHeight = $(window).innerHeight()
        const revealTop = $(".mission")[0].getBoundingClientRect().top
        const revealPoint = 350
        if(revealTop < windowHeight - revealPoint){
            $(".mission").css("opacity", "1")
        }else{
            $(".mission").css("opacity", "0")
        }
    })

    $(() => {
        $('.video video')[0].currentTime = 14
    })

    return (
        <div className="home">
            <Navbar fixed="fixed" style="light">Home</Navbar>
            <div className='video'>
                {/* <video autoPlay muted loop>
                    <source src={Video} type="video/mp4"></source>
                </video> */}
                <div className='videoTitle'>Schneider Cinema Productions</div>
            </div>
            <div className='mission'>
                <div className='title'>OUR MISSION: INSPIRE, EDUCATE & ELEVATE.</div>
                <div className="section">
                    <div className='text'>
                        <p>Schneider Cinema is on a mission to become a powerhouse on uplifting content worldwide and impact the lives of 1 billion people by 2030.</p>
                        <a className='learn' onClick={(e) => handleLearnMore()}>→ SEE NOW</a>
                    </div>
                    <div className='image'>
                        <img src={About} alt=""/>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
 
export default Home;