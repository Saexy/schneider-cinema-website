import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import $ from 'jquery'

import Logo from '../../assets/images/Logo_Name.png'

import { BiListUl } from "react-icons/bi";

import './style.css'

const Navbar = ({children, fixed, style}) => {

    const navigate = useNavigate()

    const handleClickPage = (page) => {
        navigate(`/${page}`)
    }

    const handleClickResponsive = () => {
        if($(".list").hasClass("show")){
            $(".list").removeClass("show")
        }else{
            $(".list").addClass("show")
        }
    }

    useEffect(() => {
        $(".item").each((i, e) => {
            if($(e).text() === children){
                $(e).addClass("active")
            }
        })
    },[]);

    const fixedclass = fixed != null && fixed != undefined ? fixed : ""
    const styleclass = style != null && style != undefined ? style : ""

    return (
        <div className={`navbar ${fixedclass} ${styleclass}`}>
            <div className='logo'>
                <a onClick={(e) => {handleClickPage(``)}}><img src={Logo} alt="" width={50}/></a>
                <a className="mobile-icon" onClick={(e) => {handleClickResponsive()}}>
                    <BiListUl></BiListUl>
                </a>
            </div>
            
            <div className='categories'>
                <div className="list">
                    <a onClick={(e) => {handleClickPage(``)}} className="item">Home</a>
                    <p className='divider'>|</p>
                    <a onClick={(e) => {handleClickPage(``)}} href="#projects" className="item">Projects</a>
                    <p className='divider'>|</p>
                    <a onClick={(e) => {handleClickPage(`team`)}} className="item">Team</a>
                    <p className='divider'>|</p>
                    <a onClick={(e) => {handleClickPage(`partners`)}} className="item">Partners</a>
                    <p className='divider'>|</p>
                    <a onClick={(e) => {handleClickPage(`press`)}} className="item">Press</a>
                    <p className='divider'>|</p>
                    <a href="#footer" className="item">Contact</a>
                </div>
            </div>
        </div>
    )
}
 
export default Navbar;