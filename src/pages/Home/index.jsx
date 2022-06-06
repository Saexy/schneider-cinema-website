import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';

import lstprojects from '../../models/projects';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SendEmail from '../../components/SendEmail';

import Video from '../../assets/videos/home_background.mp4'
import About from '../../assets/images/about_2.png'

import './style.css'

const Home = () => {

    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate(`/team`)
    }

    const handleClickLearn = (id) => {
        navigate(`/projects/${id}`)
    }

    const listProjects = lstprojects.map((project, i) => 
        <div className="project">
            <div className='image'>
                <img src={require("../../assets/images/projects/" + project.image)} alt=""/>
            </div>
            <div className='text'>
                <div className="texts">
                    <p className='title-texts'>{project.name}</p>
                    <p className='description-texts'>is on a mission to become a powerhouse on uplifting content worldwide and impact the lives of 1 billion people by 2030.</p>
                </div>
                <a className='see' onClick={(e) => handleClickLearn(project.id)}>→ See More</a>
            </div>
        </div>
    )

    $(window).on("scroll", () => {
        const windowHeight = $(window).innerHeight()
        const revealTopMission = $(".mission")[0].getBoundingClientRect().top
        const revealTopProjects = $(".projects")[0].getBoundingClientRect().top
        const revealPoint = 350
        if(revealTopMission < windowHeight - revealPoint){
            $(".mission").css("opacity", "1")
        }else{
            $(".mission").css("opacity", "0")
        }

        if(revealTopProjects < windowHeight){
            $(".projects").css("opacity", "1")
        }else{
            $(".projects").css("opacity", "0")
        }
    })

    $(() => {
        $('.video video')[0].currentTime = 14
    })

    return (
        <div className="home">
            <Navbar fixed="fixed" style="light">Home</Navbar>
            <div className='video'>
                <video autoPlay muted loop>
                    <source src={Video} type="video/mp4"></source>
                </video>
                <div className='videoTitle'>Schneider Cinema Productions</div>
            </div>
            <div className='mission'>
                <div className='our'>OUR MISSION</div>
                <div className='inspire'>INSPIRE, EDUCATE & ELEVATE</div>
                <div className="section">
                    <div className='image'>
                        <img src={About} alt=""/>
                    </div>
                    <div className='text'>
                        <p><strong>Schneider Cinema</strong>is on a mission to become a powerhouse on uplifting content worldwide and impact the lives of 1 billion people by 2030.</p>
                        <a className='learn' onClick={(e) => handleLearnMore()}>→ See More</a>
                    </div>
                </div>
            </div>
            <div id="projects" className='projects'>
                <div className='title'>PROJECTS</div>
                <div className='lstprojects'>
                    {listProjects}
                </div>
                
            </div>
            
            <Footer />
        </div>
    )
}
 
export default Home;