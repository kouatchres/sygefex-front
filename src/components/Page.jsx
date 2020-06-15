import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

const theme = {
  maxWidth: '1000p',
  quarterBB: ' #003c96',
  lightestBB: '#b3b4d1',
  britishRed: '#d4351c',
  complementaryBB: '#784800',
  complementaryBB1: '#007860',
  complementaryBB2: '#006078',
  complementaryColours: '#456abc',
  complementaryBB3: '#007078',
  americanBlue: '#1d70b8',
  britishBlue: '#003078',
  britishLightBlue: '#1d70b8',
  red: '#FF0000',
  googleBlue: '#359',
  goldenBrown: '#d17f05',
  black: '#393939',
  grey: '#aaabaa',
  slightGrey: 'rgb(243, 241, 241)',
  lightGrey: '#E1E1E1',
  darkGrey: '#EEEEEE',
  pureWhite: '#FFFFFF',
  offWhite: '#EDEDED',
  primary: '#00ab80',
  black2: '#4a4a4a',
  white3: '#ffffff',
  error: '#e05666',
  brownishRed: '#fo7031',
  coolBlue: '#195e83',
  coollerBlue: '#136ea5',
  sand: '#eea549',
  reddishBrown: '#f57836',
  buff: '#edb879',
  blues: [
    '#729fbf',
    '#b6c7d6',
    '#0780b7',
    '#68a1c5',
    '#014e98',
    '#2782b0',
    '#5EC9F9',
    '#c8e5eb',
    '#b1dee3',
    '#bde4e9',
    '#cce7e8'
  ],

  lightBlues: [
    '#c8e4f3',
    '#d1e8ed',
    '#b3d3ea',
    '#c5e2f2',
    '#f1f5ff',
    '#e6ecfe',
    '#9cc3dfff',
    '#ffd662ff',
    '#c7d3d4ff',
  ],
  greys: ['#F9FAFC', '#F2F2F6', '#aaabaa', '#999', '#fcfcfc', '#c8c8c8'],
  formBS3: ' inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)',
  formBS4: ' inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)',

  formBS: ' inset 0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)',
  formBS2: ' inset  0 0 2px 2px rgba(0,0,0.4,0.1)',
  formBS1: ' 2px 2px 2px 2px rgba(0,0,0.4,0.1)'
}
const GenPage = styled.div`
  /* padding-top:4rem; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-family: 'Roboto Slab';
  min-height: 100vh;
  background: ${props => props.theme.lightBlues[4]};
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;

  background: ${props => props.theme.pureWhite};
  border-radius: 0.5rem;
  border: 0.09rem solid ${props => props.theme.blues[2]};
`



const Containers = styled.div`
display: grid;
  grid-template-areas: "Headers" "Mains" "Footers";
grid-template-columns: 1fr;
  grid-template-rows: 3.5rem 1fr 3.5rem;
  height: 100vh;

  `;

const Headers = styled.div`
display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: right;
  grid-area: Headers;
  position: fixed;
  height: 3.5rem;
  z-index:10;
  border-bottom: 0.2rem solid inset 0.1rem .05rem 0.5rem rgba(0, 0, 0.8, 0.5);
  `;

const Footers = styled.div`
grid-area: Footers;
  display: flex;
  justify-content: center;
  background-color:${props => props.theme.blues[2]};
  align-items: center;
  font-size: 1.9rem;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  
  `;

const Mains = styled.div`
grid-area: Mains;
  padding-left:  auto  ;
  padding-top:  1rem  ;
  padding-right:  auto  ;
  /* margin:0 auto; */
  background-color:${props => props.theme.lightBlues[6]};
  `;


injectGlobal`



/* roboto-slab-regular - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: bold;
  font-weight: 400;
  src: url('/public/fonts/roboto/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
}

/* aguafina-script-regular - latin */
@font-face {
  font-family: 'Aguafina Script';
  font-style: bold;
  font-weight: 400;
  src: url('../fonts/aguafina-script-v8-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Aguafina Script Regular'), local('AguafinaScript-Regular'),
       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/aguafina-script-v8-latin/aguafina-script-v8-latin-regular.svg#AguafinaScript') format('svg'); /* Legacy iOS */
}
  html {
    box-sizing: border-box;
    font-size: 11px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body
{
    padding:0;
    margin: 0;
    font-size: 2rem;
    font-family: "Roboto Slab";
    font-weight: 500;
    font-style: normal;
   
  button {  font-family: 'Roboto Slab'; }

}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab";
    font-size:2rem;
    font-weight: 500;
    font-style: bold;
}

a
{
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size:1.5rem;
    font-style: italic;
    text-decoration: none;
    color: ${props => props.theme.black};
    :hover {
  text-decoration: underline;
}
}
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Containers>
          <Meta />
          <Headers>
            <Header />
          </Headers>
          <Mains>
            <Inner>{this.props.children}</Inner>
          </Mains>
          <Footers>
            <Footer />
          </Footers>
        </Containers>
      </ThemeProvider>
    )
  }
}

export default Page
