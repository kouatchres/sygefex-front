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
    '#e6ecfe'
  ],
  greys: ['#F9FAFC', '#F2F2F6', '#aaabaa', '#999', '#fcfcfc', '#c8c8c8'],
  formBS3: ' inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)',
  formBS4: ' inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)',

  formBS: ' 0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)',
  formBS2: ' inset  0 0 2px 2px rgba(0,0,0.4,0.1)',
  formBS1: ' 2px 2px 2px 2px rgba(0,0,0.4,0.1)'
}
const GenPage = styled.div`
/* 
  justify-content: center;
  align-items: center; */
  width: 100vw;
  font-family: 'Roboto Slab';
  /* min-height: 100vh; */
  height: 100%;
  background: ${props => props.theme.lightBlues[4]};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
  "Headers",
  "Inners",
  "Footers";
  grid-template-rows:3.5rem 1fr 3rem;
  
`

const Inners = styled.div`
grid-area:Inners;
margin:0 auto;
padding:0;
/* align-items:center;
justify-content:center; */
`
const Headers = styled.div`
grid-area:Headers;
z-index:100;
position: fixed;
height: 3.5rem;
width:100vw;
display:grid;
grid-template-columns:1fr;
border-bottom: 1rem solid  0.1rem .05rem 0.5rem rgba(0, 0, 0.8, 0.5);
background:${props => props.theme.grey};
`;

const Footers = styled.div`
grid-area:Footers;
display: flex;
position:fixed;
bottom:0;
width:100vw;
  justify-content: center;
  background-color: #0780b7;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  padding:0 2rem;
background:${props => props.theme.goldenBrown};
`;
injectGlobal`

/* roboto-slab-regular - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 80;
  src: url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
}

/* roboto-condensed-300 - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed Light'), local('RobotoCondensed-Light'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}
/* roboto-condensed-300italic - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed Light Italic'), local('RobotoCondensed-LightItalic'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-300italic.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}
/* roboto-condensed-regular - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-regular.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}
/* roboto-condensed-italic - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-italic.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}
/* roboto-condensed-700 - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}
/* roboto-condensed-700italic - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  src: /publicl('../fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Condensed Bold Italic'), local('RobotoCondensed-BoldItalic'),
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/roboto-condensed-v18-latin/roboto-condensed-v18-latin-700italic.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
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
    height: 100vh;
   
  button {  font-family: 'Roboto Slab'; }

}
/* 
#root{
  height:100%;
} */

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab";
    font-size:1rem;
    font-weight: 200;
    font-style: bold;
}

a
{
    font-family: "Roboto Slab";
    font-weight: 200;
    font-size:1.1rem;
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
        <GenPage>
          <Meta />
          <Headers>
            <Header />
          </Headers>
          <Inners>{this.props.children}</Inners>
          <Footers>
            <Footer />
          </Footers>
        </GenPage>
      </ThemeProvider>
    )
  }
}

export default Page
