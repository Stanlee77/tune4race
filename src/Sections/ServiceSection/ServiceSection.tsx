import React from 'react';

// @ts-ignore
import CompanyName from '/src/components/CompanyName';

import './ServiceSection.sass';

const ServiceSection = () => {
    const classPrefix = "_section_service_"

    return (
        <div>
            <h1 className={`${classPrefix}title`}>Serwis</h1>
            <p className={`${classPrefix}description`}>
                Firma <CompanyName /> zajmuje się serwisem samochodów osobowych w zakresie mechaniki pojazdowej oraz wulkanizacją. Do naszej szerokiej gamy usług należą wymiana materiałów eksploatacyjnych takich jak: klocki hamulcowe, tarcze, rozrządy, serwisy olejowe, wymiana sprzęgła, etc.
            </p>
            
        </div>
    );
}

export default ServiceSection;
