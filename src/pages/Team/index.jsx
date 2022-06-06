import React from 'react';

import Navbar from '../../components/Navbar';
import Team1 from '../../assets/images/team_1.png'

import Footer from '../../components/Footer'

import './style.css'

const Team = () => {
    return (
        <div className="team">
            <Navbar style="dark">Team</Navbar>
            <div className="section left">
                <div className='image'>
                    <img src={Team1} alt=""/>
                </div>
                <div className='texts'>
                    <p className='title'>CLEITON SCHNEIDER • CEO |BIO| </p>
                    <p className='description'>Schneider Cinema was established by Cleiton Schneider. A producer, director and SAG-AFTRA Actor member. With a bachelor in cinema and tv production by Full Sail University, he founded Schneider Cinema in Los Angeles, CA aiming for nothing less than excellence.</p>
                    <p className='description'>After working in many venues within the Hollywood realm and working with acclaimed celebrities like <strong>Tom Hanks, Clint Eastwood, Johnny Depp, Sharon Stone, Rodrigo Santoro, Thandie Newton,</strong> etc, among many others, thus significantly elevating his network and connections, Cleiton has decided to fully dedicate to his passion, Schneider Cinema, and develop high concept projects along with his creative team with the goal of leaving a legacy of inspiration and outstanding storytelling.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
 
export default Team;