import React from 'react'
import styled from 'styled-components'




const BurgerStyled = styled.div`
/* display:none; */
padding-top:1rem;
padding-bottom:1rem;
padding-left:1.5rem;
    width:5rem;
    max-height:3.5rem;
    background: ${ props => props.theme.blues[2]};
   div{
    width: 2rem;
    height: 0.2rem;
    padding: 0.1rem;
    margin-top: 0.2rem;
    background-color: ${ props => props.theme.pureWhite};
    cursor:pointer;
    }
 `;
const Burger = () => {
    return (
        <BurgerStyled>
            <div className="line1" ></div>
            <div className="line2" ></div>
            <div className="line3" ></div>
        </BurgerStyled>
    )
}

export default Burger
