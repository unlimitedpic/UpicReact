import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../Styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div class="row footer-section m-0">
                    <div class="container-fluid">
                        <div class="max-innner">
                            <div class="footer-nav row">
                                <div class="col-8">
                                    <div class="row m-0">
                                        <div class="col text-left">
                                            <p>Dzyns.com</p>
                                            <ul class="no-padding">
                                                <li>Home</li>
                                                <li>About Us</li>
                                                <li>Become a Contributor</li>
                                                <li>Our Blog</li>
                                                <li>Pricing</li>
                                                <li>Advertiser</li>
                                            </ul>
                                        </div>
                                        <div class="col text-left">
                                            <p>Need Help</p>
                                            <ul class="no-padding">
                                                <li>FAQ</li>
                                                <li>Contact Us</li>
                                            </ul>
                                        </div>
                                        <div class="col text-left">
                                            <p>Legal</p>
                                            <ul class="no-padding">
                                                <li>Licensing</li>
                                                <li>Terms of Use</li>
                                                <li>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="newsletter text-left">
                                        <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                                        <form class="row m-0 example">
                                            <input type="text" placeholder="Your email address here" name="search" />
                                                <button type="submit"><SearchIcon /></button>
                                         </form>
                                            <p class="m-t-12">Receive vector and graphics resources updates in your inbox. No spam, we promise.</p>
                                         </div>
                                    </div>
                                </div>
                                <div class="footer-bottom-section">
                                    <div class="copy-right-content ">
                                        <p>© 2003 - 2018 graphicdzyns, Inc. All rights reserved.</p>
                                    </div>
                                    <div class="footer-social-link">
                                        <span><i class="fa fa-facebook"></i></span>
                                        <span>FB</span>
                                        <span>FB</span>
                                        <span>FB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
        
export default Footer
