import React from 'react'
import "./Projects.css"
import project1 from "../../Assets/Projects/eon1.jpg"
import project2 from "../../Assets/Projects/banner.jpg"
import project3 from "../../Assets/Projects/SayaSouth.jpg"
import project4 from "../../Assets/Projects/veridia.jpg"

const Projects = () => {
    return (
        <div className='Projects'>
            <div className='Projects-main'>
                <div className="project-title">
                    <h2>Projects</h2>
                </div>
                <div className="project-main1-box">
                    <div className="project-box-card">
                        <img src={project1} alt="" />
                        <div className="project-box-title">
                            <p>FAIRFOX EON</p>
                        </div>
                    </div>
                    <div className="project-box-card">
                        <img src={project2} alt="" />
                        <div className="project-box-title">
                            <p>GODREJ JARDINIA</p>
                        </div>
                    </div>
                    <div className="project-box-card">
                        <img src={project3} alt="" />
                        <div className="project-box-title">
                            <p>SAYA SOUTH X</p>
                        </div>
                    </div>
                    <div className="project-box-card">
                        <img src={project4} alt="" />
                        <div className="project-box-title">
                        <p>VERIDIA</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
