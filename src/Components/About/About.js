import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.webp"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h2>SILVERBACK REALTY</h2>
                            <p>Silverback Realty is your trusted partner for all real estate needs in Noida. As a premier real estate consultancy, we specialize in providing personalized solutions for both residential and commercial properties. Our team of experienced professionals is dedicated to helping clients navigate the dynamic Noida market, offering expert advice and tailored strategies to meet your specific requirements. Whether you are looking to buy, sell, or invest, Silverback Realty is committed to delivering exceptional service and unmatched expertise, ensuring a seamless and rewarding real estate experience. Trust us to turn your property aspirations into reality.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="fairfox eon Noida" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
