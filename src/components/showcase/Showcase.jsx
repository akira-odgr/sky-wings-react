import { useEffect } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import ScrollReveal from "scrollreveal";

import "./Showcase.scss";

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 2000,
};

export const Showcase = () => {
    useEffect(() => {
        ScrollReveal().reveal(".showcase__image img", {
            ...scrollRevealOption,
            origin: "left",
        });
        ScrollReveal().reveal(".showcase__content h4", {
            ...scrollRevealOption,
            delay: 500,
        });
        ScrollReveal().reveal(".showcase__content p", {
            ...scrollRevealOption,
            origin: "right",
            delay: 1000,
            interval: 500,
        });
        ScrollReveal().reveal(".showcase__btn", {
            ...scrollRevealOption,
            delay: 2000,
        });
    });

    return (
        <section
            className="section__container showcase__container"
            id="package"
        >
            <div className="showcase__image">
                <img src="/images/showcase.jpg" alt="showcase" />
            </div>
            <div className="showcase__content">
                <h4>UNLEASH WANDERLUST WITH SKYWINGS</h4>
                <p>
                    Embark on a journey like no other with Skywings, where your
                    travel dreams come to life. Our mission is to inspire and
                    facilitate your adventures, whether you seek the vibrant
                    energy of bustling cityscapes, the serene beauty of pristine
                    beaches, or the captivating history of ancient landmarks. At
                    Skywings, we provide expertly curated destinations and
                    personalized itineraries, ensuring that every trip is
                    tailored to your unique preferences. Discover hidden gems,
                    immerse yourself in diverse cultures, and create
                    unforgettable memories that will last a lifetime.
                </p>
                <p>
                    With Skywings as your ultimate travel companion, exploring
                    the wonders of the world has never been easier. Our insider
                    tips and local insights give you the tools to navigate new
                    places with confidence and excitement. From the moment you
                    start planning to the day you return home, we are dedicated
                    to making your travel experience seamless and enriching.
                </p>
                <div className="showcase__btn">
                    <button className="btn">
                        Book A Flight Now
                        <RiArrowRightLine />
                    </button>
                </div>
            </div>
        </section>
    );
};
