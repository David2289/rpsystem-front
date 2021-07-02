import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZE, COLOR } from '../../utils/constants.js';
import { LabelSailecRegular } from '../atoms/label.jsx'


const AContent = styled.a`
    // To avoid purple padding:
    display: flex;
    float: ${props => props.float ? props.float : 'left'};
`;

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
    
    const icAlign = props.ic_align ? props.ic_align : 'left';
    
    const icContent = 
        <IconContent
            ic_size={props.ic_size}
            separation={props.separation} >
            <Icon src={props.ic_path}/>
        </IconContent>;
    
    const label = 
        <LabelRegularBody
            title_color={props.title_color}
            title_size={props.title_size}
            separation={props.separation} >
            {props.children}
        </LabelRegularBody>;

    if (icAlign === 'right') {
        return (
            <AContent 
                className='valign-wrapper'
                href={props.href}
                target={props.target}
                float={props.float}>
                { label }
                { icContent }
            </AContent>
        );
    }
    else {
        return (
            <AContent 
                className='valign-wrapper'
                href={props.href}
                target={props.target}
                float={props.float}>
                { icContent }
                { label }
            </AContent>
        );
    }
}

TextButton.propTypes = {
    ic_path: PropTypes.string,
    ic_size: PropTypes.string,
    ic_align: PropTypes.string,
    title_color: PropTypes.string,
    title_size: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    separation: PropTypes.string,
    float: PropTypes.string
}

export default TextButton;