import React from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function AboutUs(){


    
    return(
        <div>
        <div className="site-content-wrapper">
             <Header/>

            <section className="about-Us">
                    <div className="container"  >
                        <h1 className="section-heading">About <span className="The-Cakesmith">The Cakesmith</span></h1>
                        <div className="about-meal-wrap flex">
                            <div className="flex-1">
                                <img src="./images/yogurt.png" alt=""/>
                            </div>
                            <div className="flex-1">
                                <h2>The CakeSmith is a long established fact that a reader will be distracted</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at Hampden Sydney College in Virginia, The standard chunk of Lorem
                                    Ipsum used since the 1500s is reproduced below for those interested.</p><br></br>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at Hampden Sydney College in Virginia, The standard chunk of Lorem
                                    Ipsum used since the 1500s is reproduced below for those interested.</p><br></br>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at Hampden Sydney College in Virginia, The standard chunk of Lorem
                                    Ipsum used since the 1500s is reproduced below for those interested.</p>
                            </div>
                        </div>
                    </div>
                </section>
        <Footer/>
        </div>
        </div>
    )
    }

export default AboutUs;