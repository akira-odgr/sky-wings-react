import { Swiper, SwiperSlide } from "swiper/react";
import { RiStarFill } from "@remixicon/react";
import { clientData } from "./clientData";

import "swiper/scss";
import "swiper/css/bundle";
import "./Client.scss";

export const Client = () => {
    return (
        <section className="section__container client__container">
            <h2 className="section__header">
                Loved By Over Thousand Travelers
            </h2>
            <p className="section__description">
                Discover the stories of wanderlust and cherished memories
                through the eyes of our valued clients.
            </p>

            <Swiper
                className="swiper"
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
            >
                {clientData.map(
                    (
                        { description, image, name, position, rating = 1 },
                        index
                    ) => {
                        return (
                            <SwiperSlide key={index} className="swiper__slide">
                                <div className="client__card">
                                    <div className="client__content">
                                        <div className="client__rating">
                                            {Array.from({ length: rating }).map(
                                                (_, i) => (
                                                    <RiStarFill key={i} />
                                                )
                                            )}
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                    <div className="client__details">
                                        <img src={image} alt="client" />
                                        <div>
                                            <h4>{name}</h4>
                                            <h5>{position}</h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
        </section>
    );
};
