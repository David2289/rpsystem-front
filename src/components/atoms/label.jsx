import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants';


//* ******  <p> LABEL SAILEC REGULAR </p>  ****** *//
const LabelSailecRegularStyled = styled.p`
    font-family: 'Sailec Regular';
    line-height: 2.2em;
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelSailecRegular = (props) => {
    return (
        <LabelSailecRegularStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelSailecRegularStyled>
    );
}

LabelSailecRegular.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <p> LABEL SAILEC MEDIUM </p>  ****** *//
const LabelSailecMediumStyled = styled.p`
    font-family: 'Sailec Medium';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelSailecMedium = (props) => {
    return (
        <LabelSailecMediumStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelSailecMediumStyled>
    );
}

LabelSailecMedium.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <p> LABEL SAILEC BOLD </p>  ****** *//
const LabelSailecBoldStyled = styled.p`
    font-family: 'Sailec Bold';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelSailecBold = (props) => {
    return (
        <LabelSailecBoldStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelSailecBoldStyled>
    );
}

LabelSailecBold.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <p> LABEL SAILEC LIGHT </p>  ****** *//
const LabelSailecLightStyled = styled.p`
    font-family: 'Sailec Light';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelSailecLight = (props) => {
    return (
        <LabelSailecLightStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelSailecLightStyled>
    );
}

LabelSailecLight.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <p> LABEL HARMONY REGULAR </p>  ****** *//
const LabelHarmonyRegularStyled = styled.p`
    font-family: 'Harmony Regular';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelHarmonyRegular = (props) => {
    return (
        <LabelHarmonyRegularStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelHarmonyRegularStyled>
    );
}

LabelHarmonyRegular.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <p> LABEL HARMONY LITE </p>  ****** *//
const LabelHarmonyLiteStyled = styled.p`
    font-family: 'Harmony Lite';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LabelHarmonyLite = (props) => {
    return (
        <LabelHarmonyLiteStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LabelHarmonyLiteStyled>
    );
}

LabelHarmonyLite.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <li> LI SAILEC REGULAR </li>  ****** *//
const LiSailecRegularStyled = styled.li`
    font-family: 'Sailec Regular';
    line-height: 2.2em;
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LiSailecRegular = (props) => {
    return (
        <LiSailecRegularStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LiSailecRegularStyled>
    );
}

LiSailecRegular.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <li> LI SAILEC MEDIUM </li>  ****** *//
const LiSailecMediumStyled = styled.li`
    font-family: 'Sailec Medium';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LiSailecMedium = (props) => {
    return (
        <LiSailecMediumStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LiSailecMediumStyled>
    );
}

LiSailecMedium.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <li> LI SAILEC BOLD </li>  ****** *//
const LiSailecBoldStyled = styled.li`
    font-family: 'Sailec Bold';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LiSailecBold = (props) => {
    return (
        <LiSailecBoldStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LiSailecBoldStyled>
    );
}

LiSailecBold.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


//* ******  <li> LI SAILEC LIGHT </li>  ****** *//
const LiSailecLightStyled = styled.li`
    font-family: 'Sailec Light';
    font-size: ${props => props.text_size ? props.text_size : SIZE.body};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    text-align: ${props => props.text_align ? props.text_align : 'left'};
    position: ${props => props.position ? props.position : 'none'};
    margin: ${props => props.margin ? props.margin : ''};
`;

const LiSailecLight = (props) => {
    return (
        <LiSailecLightStyled 
            className={props.className}
            text_size={props.text_size}
            text_align={props.text_align}
            text_color={props.text_color}
            position={props.position}
            margin={props.margin}>
            {props.children}
        </LiSailecLightStyled>
    );
}

LiSailecLight.propTypes = {
    className: PropTypes.string, //Must have className to apply styled component css properties.
    text_size: PropTypes.string, 
    text_color: PropTypes.string,
    text_align: PropTypes.string, 
    position: PropTypes.string,
    margin: PropTypes.string
}


export {
    LabelSailecRegular, 
    LabelSailecMedium, 
    LabelSailecBold, 
    LabelSailecLight,
    LabelHarmonyRegular,
    LabelHarmonyLite, 
    LiSailecRegular, 
    LiSailecMedium, 
    LiSailecBold, 
    LiSailecLight
}