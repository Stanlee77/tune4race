import React from "react";

import "./Header.sass";

// @ts-ignore
import instagramIcon from "../../images/icons/instagram.svg";
// @ts-ignore
import facebookIcon from "../../images/icons/facebook_filled.svg";
// @ts-ignore
import tune4raceLogo from "../../images/logo/T4R_transparent.png";

const Header = () => {
    const classPrefix = "_component_header_";

    return (
        <React.Fragment>
            <div className={`${classPrefix}topBar`}/>
            <div className={`${classPrefix}wrapper`}>
                <div className={`${classPrefix}logo`}>
                    <img src={tune4raceLogo} alt="logo T4R" />
                </div>
                <div className={`${classPrefix}navBar`}>
                        <div className={`${classPrefix}navLink`}>o nas</div>
                        <div className={`${classPrefix}navLink`}>serwis</div>
                        <div className={`${classPrefix}navLink`}>galeria</div>
                        <div className={`${classPrefix}navLink`}>kontakt</div>
                </div>
                <div className={`${classPrefix}socialMediaWrapper`}>
                    <div className={`${classPrefix}socialMediaTile`}>
                        <img src={facebookIcon} alt="facebook" />
                        <a href="https://www.facebook.com/tune4race/" target="_blank" />
                    </div>
                    <div className={`${classPrefix}socialMediaTile`}>
                        <img src={instagramIcon} alt="instagram" />
                        <a href="https://www.instagram.com/tune4race/?igshid=hz1ci1rkn01" target="_blank" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
    
export default Header;