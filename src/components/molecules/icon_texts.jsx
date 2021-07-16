import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';
import { isNumeric } from '../../utils/utils.js'

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


const IconTexts = (props) => {
    
    const [state, setState] = useState(true);
    const marginTitle = props.title_separation ? props.title_separation + ' 0 0 0' : '10px';
    const marginDesc = props.desc_separation ? props.desc_separation + ' 0 0 0' : '0px';
    const listDesc = props.descs?.map((desc, index) =>
            <LabelSailecRegular
                key={index}
                text_color={props.desc_color ? props.desc_color : COLOR.secondary}
                text_size={SIZE.body}
                text_align={props.alignment ? props.alignment : 'left'}
                margin={marginDesc}>
                {desc}
            </LabelSailecRegular>
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
                                <LabelSailecBold 
                                text_color={props.title_color ? props.title_color : COLOR.secondary}
                                text_size={props.title_size ? props.title_size : SIZE.headline}
                                text_align={props.alignment ? props.alignment : 'left'}
                                margin={marginTitle} >
                                    <span ref={countUpRef}/>
                                </LabelSailecBold>
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
                <LabelSailecBold 
                    text_color={props.title_color ? props.title_color : COLOR.secondary}
                    text_size={props.title_size ? props.title_size : SIZE.headline}
                    text_align={props.alignment ? props.alignment : 'left'}
                    margin={marginTitle}>
                    {props.title}
                </LabelSailecBold>
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