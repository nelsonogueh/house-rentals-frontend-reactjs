import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div class="footer container-fluid">
            <div className="footerDiv">
            <div className="navigation">
                <p className="navhead">Navigation</p>
                <p className="footnote"><a href="#about">About</a></p>
                <p className="footnote"><a href="#ForRent">For Rent</a></p>
                <p className="footnote"><a href="#navhead">Agent</a></p>
            </div>
            <div className="contactUs">
                <p className="conthead" >Contact Us</p>
                <p className="footnote"><span><img src="email.svg" alt="email"></img></span>
                <span >infoshr@example.com</span></p>
                <p className="footnote"><span><img src="calling.svg" alt="calling"></img></span>
                <span>+2348105351787</span></p>
            </div>
            <div className="FollowUS">
                <p className="folhead">Follow Us</p>
                <a href="#fb"><img className="socialmedia" src="Fb.svg" alt="fb"></img></a>
                <a href="#tw"><img className="socialmedia" src="twitter.svg" alt="tw"></img></a>
                <a href="#isntg"><img className="socialmedia" src="instag.svg" alt="Instg"></img></a>
                <a className="ytb" href="#ytb"><img className="socialmedia" src="Youtube.svg" alt="Ytb"></img></a>
            </div>
            <div className="OurApps">
                <p className="Apphead">Our Apps</p>
                <a href="#andriod"><img src="andriod.svg" alt="andriod"></img></a>
                <a href="#ios"><img src="IOS.svg" alt="ios."></img></a>
            </div>
            <div className="TermsPolicies">
                <p className="TPhead">Terms And Policies</p>
                <p className="footnote"><a href="#priv">Privacy Policies</a></p>
                <p className="footnote"><a href="#TM">Terms And Conditions</a></p>
            </div>
            </div>
            <div className="copyrght"><p> &copy;2021 dshr.example.com</p></div>
        </div>
    );
}

export default Footer;