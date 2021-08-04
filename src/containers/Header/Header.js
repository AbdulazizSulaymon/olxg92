import "./Header.css"
import logo from '../../logo.svg';
import React from 'react'

const Header = () => {
    return (
        <header className="shadow mb-3">
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} className="logo" alt="logo" />
                    <p className="mb-0 ms-2">Olx.uz</p>
                </div>
            </div>
        </header>
    )
}

export default Header
