
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HamNav = styled.div`
/* [ON BIG SCREEN] */
/* Wrapper */
    margin:0;
    font-size:3rem;
    background: ${props => props.theme.blues[2]};
    align-content:center;
    width: 100%;
    padding-left: 10rem;
    height:4rem;
    position: fixed;
    top: 0;
    left:0;
    z-index:1;


/* [ON BIG SCREEN] */
/* Wrapper */
/* #hamnav {
    background: ${props => props.theme.blues[2]};
   Optional
    height:4rem;
    position: fixed;
    top: 0;
    font-size:2.5rem
    left:0;
    z-index:1;
  } */
  
  /* Hide Hamburger */
  #hamnav label, #hamburger { display: none; }
  
  /* Horizontal Menu Items */
  #hamitems {
    padding: 0;
    margin: 0;
     display: flex;
      }
  #hamitems a {
  
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    text-decoration: none;
    align-items: top;
  }
  #hamitems a:hover {
    background: ${props => props.theme.britishRed};
  }
  
  /* [ON SMALL SCREENS] */
  @media screen and (max-width: 500px){
    /* Show Hamburger Icon */
    #hamnav label {
      left:0; 
     /* border-radius:0.5rem; */
      display: inline-block; 
      color: white;
     background:${props => props.theme.britishRed};
      font-style: normal;
      font-size: 2.5rem;
      padding: 0.3rem;
    }
  
    /* Break down menu items into vertical */
    #hamitems a {
    
      display: block;
      width: 70%;
      border-top: 0.2rem solid #333;
      font-size: 1.4rem;
      background:${props => props.theme.blues[2]};
    }
  
    /* Toggle Show/Hide Menu */
    #hamitems { display: none; }
    #hamnav input:checked ~ #hamitems { 
    position:position: relative;;
    top:0;
   display: block;
   margin:0 auto;
   padding:0;
   z-index:100;
    }
  }
  
  /* [DOES NOT MATTER] */
  html, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto Slab', sans-serif;
  }
`;


const Responsive = () => {
  return (
    <HamNav>

      <nav id="hamnav">
        {/* <!-- [THE HAMBURGER] --> */}
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        {/* <!-- [MENU ITEMS] --> */}

        <ul id="hamitems">
          <div className="divLinks"> <Link href="/creates/newCand"  ><a>Candidat</a></Link></div>
          <div className="divLinks"> <Link href="/creates/newExaminer"  ><a>Prof</a></Link></div>
          <div className="divLinks"> <Link href="/Login"><a>Nouveau</a></Link></div>
          <div className="divLinks">  <Link href="creates/newCenter"  ><a>Centre</a></Link></div>
          <div className="divLinks"> <Link href="/creates/newRegion"  ><a>Admin</a></Link></div>
        </ul>

      </nav>

    </HamNav>
  )
}
export default Responsive

