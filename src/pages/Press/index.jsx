import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import news from '../../models/news';

import "./style.css"

const Press = () => {

    const navigate = useNavigate()

    const listNews = news.map((nw, i) => 
        <div className="new">
            <div className='image'>
                <img src={require("../../assets/images/news/" + nw.image)} alt="" />
            </div>
            <div className='texts'>
                <p className='title'>{nw.title}</p>
                <a className='learn' href={nw.link} target="_blank">≫ VIEW MORE...</a>
            </div>
        </div>
    )

    return (
        <div className="news">
            <Navbar style="dark">Press</Navbar>
            <div className="list-news">
                {listNews}
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Press
