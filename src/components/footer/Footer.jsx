import {
    RiFacebookFill,
    RiInstagramLine,
    RiMapPin2Fill,
    RiPhoneFill,
    RiRecordMailLine,
    RiYoutubeLine,
} from "@remixicon/react";

import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <div className="footer__logo">
                        <a href="#" className="logo">
                            Skywings
                        </a>
                    </div>
                    <p>
                        Explore the world with ease and excitement through our
                        comprehensive travel platform. Your journey begins here,
                        where seamless planning meets unforgettable experiences.
                    </p>
                    <ul className="footer__socials">
                        <li>
                            <a href="#">
                                <RiFacebookFill />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiInstagramLine />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiYoutubeLine />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Quick Links</h4>
                    <ul className="footer__links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Flights</a>
                        </li>
                        <li>
                            <a href="#">Hotels</a>
                        </li>
                        <li>
                            <a href="#">Cruise</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Contact Us</h4>
                    <ul className="footer__links">
                        <li>
                            <a href="#">
                                <RiPhoneFill className="icon" />
                                +91 9876543210
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiRecordMailLine className="icon" />
                                info@skywings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiMapPin2Fill className="icon" />
                                New Delhi, India
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Subscribe</h4>
                    <form action="/">
                        <input type="text" placeholder="Enter your email" />
                        <button className="btn">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer__bar">
                Copyright © 2024 Web Design Mastery. All rights reserved.
            </div>
        </footer>
    );
};
