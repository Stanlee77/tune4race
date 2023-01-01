import React from 'react';
import './AboutSection.sass';

const AboutSection = () => {
    const classPrefix = "_section_about_"

    const companyName = (
        <span className={`${classPrefix}companyFont`}>Tune<span>4</span>race</span>
    )

    return (
        <div>
            <h1 className={`${classPrefix}title`}>Od projektu...</h1>
            <p className={`${classPrefix}description`}>
                Firma {companyName} powstała by spełniać motoryzacyjne fantazje klientów. Do każdego projektu podchodzimy indywidualnie, nie każdy samochód jest autem wyścigowym, ale każdy może nam umilać czas spędzony za kółkiem
            </p>
        </div>
    );
};

export default AboutSection;
