import { destinationData } from "./destinationData";
import { RiStarFill } from "@remixicon/react";

export const Discover = () => {
    return (
        <>
            <section className="destination__container section__container">
                <h2 className="section__header">Popular Destination</h2>
                <p className="section__description">
                    Discover the Most Loved Destinations Around the Globe
                </p>
                <div className="destination__grid">
                    {destinationData.map(
                        ({ name, image, nickname, city, number }, index) => (
                            <div className="destination__card" key={index}>
                                <img src={image} alt={name} />
                                <div className="destination__card__details">
                                    <div>
                                        <h4>{nickname}</h4>
                                        <p>{city}</p>
                                    </div>
                                    <div className="destination__rating">
                                        <span>
                                            <RiStarFill />
                                        </span>
                                        {number}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
        </>
    );
};
