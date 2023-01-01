import React from 'react';

import './CompanyName.sass';

const CompanyName = () => {
    const classPrefix = "_component_companyName_"

    return (
        <span className={`${classPrefix}wrapper`}>
            Tune
            <span>
                4
            </span>
            race
        </span>
    );
};

export default CompanyName;
