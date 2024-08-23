import { discoverData } from "./discoverData";
import ScrollReveal from "scrollreveal";

import "./Discover.scss";
import { useEffect } from "react";

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 2000,
};

export const Discover = () => {
    useEffect(() => {
        ScrollReveal().reveal(".discover__card", {
            ...scrollRevealOption,
            interval: 500,
        });
    }, []);

    return (
        <section className="section__container discover__container">
            <h2 className="section__header">Discover The World From Above</h2>
            <p className="section__description">
                Experience Breathtaking Views and Unique Perspectives
            </p>
            <div className="discover__grid">
                {discoverData.map(({ icon, title, description }, index) => {
                    return (
                        <div key={index} className="discover__card">
                            {icon}
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
