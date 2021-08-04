import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer
