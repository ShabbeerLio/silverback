import React, { useEffect, useState } from 'react'
import bannerimg from "../../Assets/Banner/bannernew.jpg"
import "./Banner.css"

import { FaBriefcase, FaCartShopping, FaMugSaucer, FaBed } from "react-icons/fa6";
import FormFloat from '../Navbar/FormFloat';

const Banner = () => {

    const [formopen, setFormopen] = useState(false);

    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                    <h1>Buy Commercial & Residential Properties in Noida with Us</h1>
                    {/* <h5>Buy Commercial Real Estate in Noida with Us</h5> */}
                    <p><a onClick={formIsOpen}>Enquire Now</a></p>
                </div>
                <div className="banner-image">
                    <img src={bannerimg} alt="" />
                </div>
                <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaBriefcase />
                            <div className="banner-card-detail">
                                <h4>Office Space</h4>
                                <p>Lockable Office Space </p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaCartShopping />
                            <div className="banner-card-detail">
                                <h4>Retail Shop</h4>
                                <p>Lockable Retail Space</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaMugSaucer />
                            <div className="banner-card-detail">
                                <h4>Food Court</h4>
                                <p>Shop in Food Court</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaBed />
                            <div className="banner-card-detail">
                                <h4> Apartments </h4>
                                <p>2/3/4 BHK Flats & Villa</p>
                            </div>
                        </div>
                    </div>
                </div>
                {formopen && (
                    <>
                        <FormFloat formIsClose={formIsClose} />
                    </>
                )}
            </div>
        </>
    )
}

export default Banner
