import logo from '../../logo.svg';
import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../ThemeContext";
import HeaderWrapper from './HeaderWrapper';

const Header = () => {
    const { theme, toggleTheme, colors } = useContext(ThemeContext);
    console.log(theme, colors);

    return (
        <HeaderWrapper className="shadow mb-3" colors={colors}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} clasName="logo" alt="logo" />
                    <p className="mb-0 ms-2">Olx.uz</p>
                </div>
                <Button onClick={toggleTheme} color={theme}>
                    <FontAwesomeIcon icon={faSun} />
                </Button>
            </div>
        </HeaderWrapper>
    )
}

export default Header
