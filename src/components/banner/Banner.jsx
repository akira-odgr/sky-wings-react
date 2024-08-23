import ScrollReveal from "scrollreveal";
import { bannerData } from "./bannerData";

import "./Banner.scss";
import { useEffect } from "react";

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 2000,
};

export const Banner = () => {
    useEffect(() => {
        ScrollReveal().reveal(".banner__card", {
            ...scrollRevealOption,
            interval: 500,
        });
    }, []);

    return (
        <section className="section__container banner__container">
            {bannerData.map(({ title, description }, index) => {
                return (
                    <div key={index} className="banner__card">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                );
            })}
        </section>
    );
};
