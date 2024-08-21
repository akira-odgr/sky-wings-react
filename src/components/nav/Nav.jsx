import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

import "./Nav.scss";

export const Nav = () => {
    const [navLinks, setNavLinks] = useState("nav__links");
    const [menuIcon, setMenuIcon] = useState(<RiMenuLine className="icon" />);
    const toggleMenu = () => {
        setNavLinks((prevLinks) =>
            prevLinks === "nav__links" ? "nav__links open" : "nav__links"
        );
        setMenuIcon((prevIcon) =>
            prevIcon.type === RiMenuLine ? (
                <RiCloseLine className="icon" />
            ) : (
                <RiMenuLine className="icon" />
            )
        );
    };
    return (
        <nav className="nav">
            <div className="nav__header">
                <div className="nav__logo">
                    <a href="#" className="logo">
                        Skywings
                    </a>
                </div>
                <div className="nav__menu__btn" onClick={toggleMenu}>
                    {menuIcon}
                </div>
                <ul className={navLinks}>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#tour">TOUR</a>
                    </li>
                    <li>
                        <a href="#package">PACKAGE</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li>
                        <a href="#">BOOK TRIP</a>
                    </li>
                </ul>
                <div className="nav__btns">
                    <button className="btn">BOOK TRIP</button>
                </div>
            </div>
        </nav>
    );
};
