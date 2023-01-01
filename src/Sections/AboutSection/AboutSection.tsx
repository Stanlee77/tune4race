import React from 'react';

import './AboutSection.sass';

// @ts-ignore
import CompanyName from '/src/components/CompanyName';

// @ts-ignore
import tune4raceLogo from '/src/images/logo/tune4race.png';

const AboutSection = () => {
    const classPrefix = "_section_about_"

    return (
        <div className={`${classPrefix}wrapper`}>
            <h1 className={`${classPrefix}title`}>Od projektu...</h1>
            <p className={`${classPrefix}description`}>
                Firma <CompanyName /> powstała by spełniać motoryzacyjne fantazje klientów. 
                <span className={`${classPrefix}semiBold`}>
                    &nbsp;Do każdego projektu podchodzimy indywidualnie
                </span>
                , nie każdy samochód jest autem wyścigowym, ale 
                <span className={`${classPrefix}semiBold`}>
                    &nbsp;każdy może nam umilać czas spędzony za kółkiem
                </span>
            </p>
            <img src={tune4raceLogo} alt="logo, napis tune4race.pl" className={`${classPrefix}logo`} />
            <p className={`${classPrefix}description`}>
                Postaramy się, by Twoje auto dało więcej frajdy, gdy pojedziesz na
                <span className={`${classPrefix}semiBold`}>
                &nbsp;tor wyścigowy
                </span>
                , ale także
                <span className={`${classPrefix}semiBold`}>
                    &nbsp;stojąc w korku :) 
                </span>
            </p>
            <p className={`${classPrefix}description`}>
                Zapraszam 
                <br />
                Olejniczak Michał
            </p>
        </div>
    );
};

export default AboutSection;
