import styled from 'styled-components';

const Footer = styled.footer`
  display: block;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.light};
  padding: 20px 0px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Footer;
