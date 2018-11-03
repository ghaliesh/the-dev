import styled from 'styled-components';
import PropType from 'prop-types';

const Button = styled.button`
  background: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  transform: translate(0%, 0%);
  color: ${props =>
    props.theme[props.text] ? props.theme[props.text] : props.text};
  width: ${prop => (prop.lg ? '240px' : '120px')};
  border: 1px solid ${props => props.theme[props.color]};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  cursor: pointer;
  border: ${props => props.border};
  border-radius: ${props => props.raduis};
  overflow: hidden;
  transition: 0.7s;
  outline: none;
  height: ${props => (props.lg ? '80px' : '45px')};

  &:hover {
    background: ${props =>
      props.theme[props.hover] ? props.theme[props.hover] : props.hover};
  }

  ${props => addEffect(props.effect)};
`;

Button.propTypes = {
  size: PropType.string,
  margin: PropType.string,
  padding: PropType.string,
  raduis: PropType.string,
  border: PropType.string,
  lg: PropType.bool,
  color: PropType.string,
  text: PropType.string,
  effect: PropType.bool
};

Button.defaultProps = {
  size: '.8rem',
  margin: 'inital',
  raduis: '0px',
  padding: 'initial',
  lg: false,
  color: 'primary',
  text: 'light',
  effect: false
};

const addEffect = effect => {
  if (effect) {
    return `
      &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 60px;
    background: rgba(255, 255, 255, 0.5);
    left: 0;
    top: 0;
    opacity: 0.5s;
    filter: blur(30px);
    transform: translateX(-130px) skewX(-15deg);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 30px;
    left: 30px;
    top: 0;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    filter: blur(30px);
    transform: translate(-100px) scaleX(-15deg);
  }

  &:hover:before {
    transform: translateX(300px) skewX(-15deg);
    opacity: 0.6;
    transition: 0.7s;
  }

  &:hover:after {
    transform: translateX(300px) skewX(-15deg);
    opacity: 1;
    transition: 0.7s;
  }
    `;
  }
};

export default Button;
