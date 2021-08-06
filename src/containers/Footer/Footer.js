import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import ThemeContext from '../../ThemeContext';
import FooterWrapper from './FooterWrapper';

const Footer = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <FooterWrapper colors={colors}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/mobileapps" className="d-block mb-2">Мобильные приложения</Link>
                        <Link to="/mobileapps" className="d-block mb-2">Мобильные приложения</Link>
                        <Link to="/mobileapps" className="d-block mb-2">Мобильные приложения</Link>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
