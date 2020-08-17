import React from "react";
import styled from "styled-components";

const FooterItems = styled.ul`
  margin: 0 auto;
  display: flex;
  align-content: center;
  padding-bottom: 0.5rem;
`;

const FooterItem = styled.li`
  list-style: none;
  display: flex;
  padding: 0 0.5rem;
  font-size: 1.5rem;
`;
const FooterContainer = styled.div`
  margin: 0 auto;
  margin-top: 0.5rem;
  display: flex;
  bottom: 0;
  left: 0;
  /* height:3rem;
position:absolute;
width:100%; */
  align-items: center;
  color: ${(props) => props.theme.pureWhite};
  background: ${(props) => props.theme.blues[2]};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItem>SYGEFEX</FooterItem>
        <FooterItem> &#9400; Copyright</FooterItem>
        <FooterItem>Contact</FooterItem>
      </FooterItems>
    </FooterContainer>
  );
};

export default Footer;
