import { journeyData } from "./journeyData";
import "./Journey.scss";

export const Journey = () => {
    return (
        <section className="section__container journey__container" id="tour">
            <h2 className="section__header">Journey To The Sky Made Simple!</h2>
            <p className="section__description">
                Effortless Planning for Your Next Adventure
            </p>

            <div className="journey__grid">
                {journeyData.map(
                    ({ icon, bgTitle, contentTitle, contentDesc }, index) => {
                        return (
                            <div key={index} className="journey__card">
                                <div className="journey__card__bg">
                                    {icon}
                                    <h4>{bgTitle}</h4>
                                </div>
                                <div className="journey__card__content">
                                    {icon}
                                    <h4>{contentTitle}</h4>
                                    <p>{contentDesc}</p>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};
