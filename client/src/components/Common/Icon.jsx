import styled from 'styled-components';
import PropType from 'prop-types';

const Icon = styled.i`
  font-size: ${props => props.size};
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  cursor: ${props => (props.clickable ? 'pointer' : 'initial')}
  font-weight: ${props => (props.bold ? 'bold' : '600')};
`;

Icon.propTypes = {
  margin: PropType.string
};

Icon.defaultProps = {
  margin: '0px 5px'
};

export default Icon;
