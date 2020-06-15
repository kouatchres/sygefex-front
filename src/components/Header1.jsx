import Link from "next/link";
import styled from "styled-components";
import MegaMenu from "./mega-menu/MegaMenu";
import Burger from "./mega-menu/Burger";

import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 3rem;
  position: relative;
    margin:0;
    font-weight:bold;
    font-family: "Roboto Slab";
    letter-spacing:0.6rem;
    padding-bottom: 0.5rem ;
    padding-left: 0.8rem ;
    padding-right: 0.8rem ;
    align-items:center;
    text-align:center;
  background: ${props => props.theme.pureWhite};
  /* border: .2rem solid ${props => props.theme.pureWhite}; */
  a {
    color: ${props => props.theme.blues[2]};
    background: ${props => props.theme.pureWhite};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
    position:fixed;
    left:0;
    top:0;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow:row;
    /* justify-content: space-between; */
    align-content:center;
    
    
    /* height:4rem; */
    /* border-bottom:.3rem solid ${props => props.theme.britishRed}; */
    @media (min-width: 600px) {
    position:fixed;
    left:0;
    top:0;
    grid-template-columns: 6fr  20fr;
   
    }
    
    @media (max-width: 1000px) {
      position:fixed;
    left:0;
    top:0;
    grid-template-columns: 3fr  30fr;
      justify-content: left;
      padding:0.5rem;
   
     } 
    
  `;
const SubBar = styled.div`
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    /* border-bottom: 1px solid ${props => props.theme.lightgrey}; */
  
`;


const Header = () => (
  <StyledHeader>
    <SubBar>
      <Logo>
        <Link href="/login/login">
          <a>SYGEX</a>
        </Link>
      </Logo>
      <Burger />
    </SubBar>
    <MegaMenu />
  </StyledHeader>
);

export default Header;
