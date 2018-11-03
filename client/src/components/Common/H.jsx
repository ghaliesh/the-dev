import styled from 'styled-components';
import PropTypes from 'prop-types';

const H = styled.h1`
  font-size: ${props => props.size};
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  padding: ${props => props.padding};
  border: ${props =>
    props.border ? '1px solid' + props.theme[props.border] : 'initial'};
  margin: ${props => props.margin};
  font-weight: ${props => (props.bold ? 'bold' : '600')};

  @media (max-width: 760px) {
    text-align: center;
  }
`;

H.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  bold: PropTypes.bool
};

H.defaultProps = {
  size: '1.3rem',
  color: 'light',
  padding: 'initial',
  margin: 'initial',
  bold: false
};

export default H;
