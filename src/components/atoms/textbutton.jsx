import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZE, COLOR } from '../../utils/constants.js';
import { LabelSailecRegular } from '../atoms/label.jsx'


const IconContent = styled.div`
    width: ${props => props.ic_size ? props.ic_size : '25px'};
    height: ${props => props.ic_size ? props.ic_size : '25px'};
    margin-left: ${props => props.separation ? props.separation : '15px'};
    margin-right: ${props => props.separation ? props.separation : '15px'};
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    display: block;
`;

const LabelRegularBody = styled(LabelSailecRegular)`
    font-size: ${props => props.title_size ? props.title_size : SIZE.body};
    color: ${props => props.title_color ? props.title_color : COLOR.black};
    margin-right: ${props => props.separation ? props.separation : '15px'};
`;


const TextButton = (props) => {
    return (
        <a 
            className='valign-wrapper'
            href={props.href}
            target={props.target}>
            <IconContent
                ic_size={props.ic_size}
                separation={props.separation} >
                <Icon src={props.ic_path}/>
            </IconContent>
            <LabelRegularBody
                title_color={props.title_color}
                title_size={props.title_size}
                separation={props.separation} >
                {props.children}
            </LabelRegularBody>
        </a>
    );
}

TextButton.propTypes = {
    ic_path: PropTypes.string,
    ic_size: PropTypes.string,
    title_color: PropTypes.string,
    title_size: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    separation: PropTypes.string
}

export default TextButton;