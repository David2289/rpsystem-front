import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils/constants.js';
import SVG from 'react-inlinesvg';

import PathLogo from '../../icons/ic_logo.svg';

const current_year = new Date().getFullYear();
const copyright_label = "Copyright \xA9" + current_year.toString() + " Todos los derechos reservados";

const Content = styled.div`
    height: 200px;
    background-color: ${COLOR.secondary};
`;

const Logo = styled(SVG)`
    fill: ${COLOR.white};
    margin: auto;
    height: 100px;
`;

const Footer = () => (
    <Content className='valign-wrapper'>
        <Logo src={PathLogo}/>
    </Content>
);

export default Footer;