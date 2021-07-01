import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
    padding: ${props => props.padding ? props.padding : '0 0'};
`;

const SVGStyled = styled(SVG)`
    height: ${props => props.height ? props.height : '35px'};
    fill: ${props => props.ic_color ? props.ic_color : COLOR.black};
    display: block;
    margin: ${props => props.alignment && props.alignment == 'center' ? 'auto' : 'none'};
`;

const Title = styled(LabelSailecBold)`
    color: ${props => props.title_color ? props.title_color : COLOR.secondary};
    font-size: ${props => props.title_size ? props.title_size : SIZE.headline};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
    margin-top: ${props => props.title_separation ? props.title_separation : '10px'};
`;

const Description = styled(LabelSailecRegular)`
    color: ${props => props.desc_color ? props.desc_color : COLOR.secondary};
    font-size: ${SIZE.body};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
    margin-top: ${props => props.desc_separation ? props.desc_separation : '0px'};
`;



function isNumeric(num) {
    return !isNaN(num)
}


const IconTexts = (props) => {
    
    const [state, setState] = useState(true);
    const listDesc = props.descs?.map((desc, index) =>
            <Description
                key={index}
                desc_color={props.desc_color}
                alignment={props.alignment}
                desc_separation={props.desc_separation}>
                {desc}
            </Description>
        );
    
    
    if (isNumeric(props.title)) {
        return (
            <Content margin={props.margin} padding={props.padding}>
                <SVGStyled 
                    src={props.ic_path}
                    height={props.ic_height}
                    ic_color={props.ic_color}
                    alignment={props.alignment}
                    />
                <CountUp 
                    start={0} 
                    end={parseInt(props.title)}
                    suffix={props.suffix}
                    redraw={true}
                    onEnd={() => {setState(false)}}
                    >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor active={state} onChange={start} delayedCall>
                            {({isVisible}) => 
                                <Title 
                                ref={countUpRef}
                                title_color={props.title_color}
                                title_size={props.title_size}
                                alignment={props.alignment}
                                title_separation={props.title_separation} />
                            }
                        </VisibilitySensor>
                    )}
                </CountUp>
                {listDesc}
            </Content>
        );
    }
    else {
        return (
            <Content margin={props.margin} padding={props.padding}>
                <SVGStyled 
                    src={props.ic_path}
                    height={props.ic_height}
                    ic_color={props.ic_color}
                    alignment={props.alignment}
                    />
                <Title 
                    title_color={props.title_color}
                    title_size={props.title_size}
                    alignment={props.alignment}
                    title_separation={props.title_separation}>
                        {props.title}
                </Title>
                {listDesc}
            </Content>
        );
    }
}

IconTexts.propTypes = {
    ic_path: PropTypes.string.isRequired,
    ic_height: PropTypes.string,
    ic_color: PropTypes.string,
    title: PropTypes.string,
    title_size: PropTypes.string,
    title_color: PropTypes.string,
    title_separation: PropTypes.string,
    suffix: PropTypes.string,
    descs: PropTypes.arrayOf(string),
    desc_color: PropTypes.string,
    desc_separation: PropTypes.string,
    alignment: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default IconTexts;