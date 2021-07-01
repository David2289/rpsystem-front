import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css';
import styled from 'styled-components';
import { Navbar, NavItem } from 'react-materialize';
import { LabelSailecMedium } from '../atoms/label.jsx';
import { COLOR, SIZE, SCREEN_MEDIA, LABEL } from '../../utils/constants.js';

import PathLogo from '../../icons/ic_logo.svg';
import PathBurger from '../../icons/ic_burger.svg';


const Logo = styled.img`
    height: 40px;
    top: 10px;
    position: relative;
`;
const Burger = styled.img`
    width: 20px;
    position: relative;
`;

const logo_dom = <a href='/'><Logo src={PathLogo}></Logo></a>
const burger_dom = <Burger src={PathBurger}></Burger>;

const LabelMediumBodySecondary = styled(LabelSailecMedium)`
    font-size: ${SIZE.body};
    color: ${COLOR.secondary};
`;

const NavbarStyled = styled(Navbar)`
    @media only screen and ${SCREEN_MEDIA.small} {
        padding: 0 0px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        padding: 0 10px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.long} {
        padding: 0 100px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.xlong} {
        padding: 0 100px;
        background-color: ${COLOR.primary};
    }
`;

const NavItemStyled = styled(NavItem)`
    color: ${COLOR.secondary};
    background-color: ${props => props.selected ? '#f0bc11' : COLOR.primary};
`;

const Header = (props) => {

    var initial_selected = false;
    var us_selected = false;
    var contact_selected = false;
    var service_selected = false;

    switch (props.selected) {
        case LABEL.initial:
            initial_selected = true;
            break;
        case LABEL.us:
            us_selected = true;
            break;
        case LABEL.contact:
            contact_selected= true;
            break;
        case LABEL.service:
            service_selected= true;
            break;
    }
    

    return (
        <NavbarStyled 
            alignLinks='right'
            brand={logo_dom}
            fixed={true}
            menuIcon={burger_dom}>

            <NavItemStyled
                href='/'
                selected={initial_selected}>
                <LabelMediumBodySecondary>{LABEL.initial}</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled
                href='/service'
                selected={service_selected}>
                <LabelMediumBodySecondary>{LABEL.service}</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled
                href='/nosotros'
                selected={us_selected}>
                <LabelMediumBodySecondary>{LABEL.us}</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled>
                <LabelMediumBodySecondary>Nuestra Propuesta</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled
                href='/contact'
                selected={contact_selected}>
                <LabelMediumBodySecondary>{LABEL.contact}</LabelMediumBodySecondary>
            </NavItemStyled>

        </NavbarStyled>
    );
    
}

Header.propTypes = {
    selected: PropTypes.string
}

export default Header;