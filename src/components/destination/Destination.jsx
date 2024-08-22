import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { destinationData } from "./destinationData";
import { RiStarFill } from "@remixicon/react";

import "./Destination.scss";

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 2000,
};

export const Destination = () => {
    useEffect(() => {
        ScrollReveal().reveal(".section__header", {
            ...scrollRevealOption,
            origin: "left",
        });
        ScrollReveal().reveal(".section__description", {
            ...scrollRevealOption,
            origin: "left",
        });
        ScrollReveal().reveal(".destination__card", {
            ...scrollRevealOption,
            interval: 500,
        });
    }, []);
    return (
        <section
            className="destination__container section__container"
            id="about"
        >
            <h2 className="section__header">Popular Destination</h2>
            <p className="section__description">
                Discover the Most Loved Destinations Around the Globe
            </p>
            <div className="destination__grid">
                {destinationData.map(
                    ({ name, image, nickname, city, number }, index) => (
                        <div className="destination__card" key={index}>
                            <div className="destination__card__image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="destination__card__details">
                                <div>
                                    <h4>{nickname}</h4>
                                    <p>{city}</p>
                                </div>
                                <div className="destination__rating">
                                    <RiStarFill className="icon" />
                                    {number}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
