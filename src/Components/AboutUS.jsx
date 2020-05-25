import React, { Component } from 'react'
import Header from './Header';
import Footer from './footer';
import { Link } from 'react-router-dom';



export class AboutUS extends Component {


    render() {
        return (
            <div>
                <Header />
                <div class="About-us-title text-center">
                    <h1>Welcome to UnlimitedPic!</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="About-us-text-content">
                                <p>We’re proud to be the largest vector graphics and photo community in the world. Here you can explore and discuss the creations of other artists from around the world, or just find that perfect little freebie for your next project. Vecteezy makes it easy to explore thousands of graphics and photos created by artists from all over the globe. Most of the files are free to download and, depending on the license, free to use in your projects. We strive to offer you fresh designs that can be used to create your commercial or personal graphic design projects. We’ll save you the cheesy mottos and taglines, and let the content do the talking.                        </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src="https://www.glazestock.com/img/whale.aec53083.png" />
                            </div>
                        </div>
                    </div>

                    <div className="row about-us-feature">
                        <div className="col-md-4">
                            <div className="about-feature-card text-center">
                                <div className="about-feature-img">
                                    <img src="https://www.glazestock.com/img/cat.3184bbf4.png" />
                                </div>
                                <div className="about-featue-text">
                                    <h5 className="fw-700">FREE-TO-USE</h5>
                                    <p>All of our images are free to use
with attribution.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-feature-card text-center">
                                <div className="about-feature-img">
                                    <img src="https://www.glazestock.com/img/trophy.4b9435b3.png" />
                                </div>
                                <div className="about-featue-text">
                                    <h5 className="fw-700">PREMIUM QUALITY</h5>
                                    <p>Curated by expert moderators that
account for changing visual styles</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-feature-card text-center">
                                <div className="about-feature-img">
                                    <img src="https://www.glazestock.com/img/globe.5862e894.png" />
                                </div>
                                <div className="about-featue-text">
                                    <h5 className="fw-700">WORLD LIBRARY</h5>
                                    <p>Unlimitedpic is used by educational
institutions, non-profits, startups,
and fortune 500 companies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div >
        )
    }
}

export default AboutUS