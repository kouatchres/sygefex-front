import Link from "next/link";
import MegaMenu from "./mega-menu/MegaMenu";
import Burger from "./mega-menu/Burger";
import styled from 'styled-components'
import NProgress from 'nprogress';
import Router from 'next/router'
import User from '../components/User'


Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};
const StyledHeader = styled.div`

    position: fixed;
    left: 0;
    top: 0;
    align-content: center;
    z-index:100;
   
    .megaMenu {
    display: none;
     }
    .subBar{
    margin:0 ;
    align-items:center;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    
}

.logo {
    font-size: 3rem;
    position: relative;
    height:3.5rem;
    font-weight: bold;
    font-family: "Roboto Slab";
    letter-spacing: 0.3rem;
    background: ${ props => props.theme.pureWhite};
    a {
    align-items:center;
        color: ${ props => props.theme.blues[2]};
    padding-bottom:2rem;
    padding:0 2rem;
        /* background: ${ props => props.theme.pureWhite}; */
        text-transform: uppercase;
        text-decoration: none;
    }
    
}

  .meMenu {
    font-size: 1.2rem;
    position: relative;
    height:3.5rem;
    font-weight: normal;
    font-family: "Roboto Slab";
    align-items: center;
    text-align: center;
    letter-spacing: 0.15rem;
    color: ${ props => props.theme.pureWhite};
    background: ${ props => props.theme.blues[2]};
        padding:0  2rem;
    }

    @media(min-width: 550px) {
        position: fixed;
        left: 0;
        top: 0;
        .subBar{
            margin:0 auto;
            align-items:center;
            display:grid;
            grid-template-columns:repeat(2, 1fr);
    
    .meMenu{
        display:grid;
    }
    .burger{
        display:none;
    }
            
        }
    .navigation {
        display:grid;
        grid-template-columns: 1fr 1fr;
       
        }
    .megaMenu{
        display:grid;
    }
  x
   
    .burger{
            display:none;
        }
  }
   `;


const Header = () => (
    <StyledHeader>
        <div className="navigation">
            <div className="subBar">
                <div className="logo">
                    <Link href="/login/login">
                        <a>SYGEFEX</a>
                    </Link>
                </div>
                <div className="burger">
                    <Burger />
                </div>
                <div className="meMenu">
                    <User >
                        {({ data }) => {
                            const currentUser = data && data.me
                            if (currentUser) {
                                return currentUser.name
                            }
                            return null
                        }}
                    </User>
                </div>

            </div>
            <div className="megaMenu">
                <MegaMenu />
            </div>

        </div>
    </StyledHeader>
);

export default Header;
