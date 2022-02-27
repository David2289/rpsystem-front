import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { LabelSailecRegular } from '../atoms/label.jsx'


const AContent = styled.a`
    // To avoid purple padding it's necesary display flex in the content.
    display: flex;
    float: ${props => props.float ? props.float : 'left'}; 
    margin: ${props => props.margin ? props.margin : '0 0'};
    cursor: pointer;
`;

const IconContent = styled.div`
    width: ${props => props.ic_size ? props.ic_size : '25px'};
    height: ${props => props.ic_size ? props.ic_size : '25px'};
    margin-left: ${props => props.separation ? props.separation : '15px'};
    margin-right: ${props => props.separation ? props.separation : '15px'};
`;

const SVGStyled = styled(SVG)`
    height: 100%;
    width: 100%;
    display: block;
    fill: ${props => props.ic_color ? props.ic_color : 'none'};
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    display: block;
`;


const TextButton = (props) => {
    
    const icAlign = props.ic_align ? props.ic_align : 'left';
    const margin = '0 ' + props.separation + ' 0 ' + props.separation;
    
    const icContent = props.ic_color ? 
        <IconContent
            ic_size={props.ic_size}
            separation={props.separation} >
            <SVGStyled 
                src={props.ic_path}
                ic_color={props.ic_color}
                />
        </IconContent>
        :
        <IconContent
            ic_size={props.ic_size}
            separation={props.separation} >
            <Icon 
                src={props.ic_path}
                ic_color={props.ic_color}
                />
        </IconContent>;
    
    const label = 
        <LabelSailecRegular
            text_color={props.title_color}
            text_size={props.title_size}
            margin={margin} >
            {props.children}
        </LabelSailecRegular>;

    if (icAlign === 'right') {
        return (
            <AContent 
                className='valign-wrapper'
                href={props.href}
                target={props.target}
                float={props.float}
                margin={props.margin}
                onClick={props.onClick}>
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
                float={props.float}
                margin={props.margin}
                onClick={props.onClick}>
                { icContent }
                { label }
            </AContent>
        );
    }
}

TextButton.propTypes = {
    ic_path: PropTypes.string,
    ic_color: PropTypes.string,
    ic_size: PropTypes.string,
    ic_align: PropTypes.string,
    title_color: PropTypes.string,
    title_size: PropTypes.string,
    margin: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    separation: PropTypes.string,
    float: PropTypes.string, 
    onClick: PropTypes.func
}

export default TextButton;