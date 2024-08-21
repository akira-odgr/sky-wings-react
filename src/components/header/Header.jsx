import ScrollReveal from "scrollreveal";
import { RiPlayCircleFill } from "@remixicon/react";
import { useEffect } from "react";

import "./Header.scss";

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

export const Header = () => {
    useEffect(() => {
        // ScrollRevealの初期化
        ScrollReveal().reveal(".header__image img", {
            ...scrollRevealOption,
            origin: "right", // アニメーションが始まる位置
        });
        ScrollReveal().reveal(".header__content p", {
            ...scrollRevealOption,
            delay: 500,
        });
        ScrollReveal().reveal(".header__content h1", {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(".header__btns", {
            ...scrollRevealOption,
            delay: 1500,
        });
    }, []);

    return (
        <>
            <header className="header" id="home">
                <div className="header__container">
                    <div className="header__content">
                        <p>ELEVATE YOUR TRAVEL JOURNEY</p>
                        <h1>Experience The Magic Of Flight!</h1>
                        <div className="header__btns">
                            <button className="btn">Book A Trip Now</button>
                            <a href="#">
                                <RiPlayCircleFill className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="header__image">
                        <img src="/images/header.png" alt="header" />
                    </div>
                </div>
            </header>
        </>
    );
};
