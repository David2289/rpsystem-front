import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row as MatRow } from 'react-materialize';
import { SIZE } from '../../utils/constants.js'

const Row = styled(MatRow)`
    margin: ${props => props.margin ? props.margin : SIZE.row_margin};
    padding: ${props => props.padding ? props.padding : '0 0'};
    // When Row have valign-wrapper to center its content, the Grid break up and vertical alignment doesn't work.
    // To solve it. Is neceasary to use flex-wrap wrap:
    flex-wrap: wrap;
`;

Row.propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default Row;