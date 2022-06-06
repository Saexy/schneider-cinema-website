import React, { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import lstprojects from '../../models/projects';

import "./style.css"

const Project = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const existsId = (idtest) => {
        if(lstprojects.filter((project) => project.id == idtest).length > 0){
            return true
        }else{
            return false
        }
    }

    useEffect(() => {
        if(!existsId(id)){
            navigate(`/`)
        }
    }, [])

    const showProject = lstprojects.filter((project) => project.id == id).map((project, i) => 
        <div className="description">
            <div className='image'>
                <img src={require("../../assets/images/projects/" + project.image)} alt="" />
            </div>
            <div className='texts'>
                {project.list.map((individualproject, ip) => 
                    <div className='individual'>
                        <p className='title'>{individualproject.name}</p>
                        <p className='desc'>{individualproject.description}</p>
                    </div>
                )}
                
            </div>
        </div>
    )

    return (
        <div className="project-page">
            <Navbar style="dark">Projects</Navbar>
            {showProject}
            <Footer></Footer>
        </div>
    );
}
 
export default Project
