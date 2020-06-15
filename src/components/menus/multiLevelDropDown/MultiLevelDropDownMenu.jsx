
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


// functions
const NavBar = styled.div`
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

/* padding-top:1rem; */



@media screen and (max-width:600px) {
.multi-level , .category  ul, .nav input[type="checkbox"]{
    display:none;
    }
    #menu:checked ~ .multi-level , .category input:checked ~ ul{
    display:block;
} 
  .navLink{
      display:block;
  }
 
label:hover, a:hover{
    cursor:pointer;
}
label{
    width:100%;
    z-index:3;
    display:block;
    position:relative;
    
}
.nav{
    width:100%
    overflow-x: hidden;
    background:${props => props.theme.pureWhite};
    border-bottom: 0.1rem solid ${props => props.theme.britishRed};
}
#nav-icon{
    font-size:2rem;
    line-height:3rem;
    color:${props => props.theme.pureWhite}
    padding-left:1rem;
    background-color: ${props => props.theme.britishRed};
}
.nav ul , .navLink,  label{
    line-height:2rem;
    margin:0 ;
    padding:0 1rem;
    list-style:none;
    text-decoration:none;
    /* color:#90A4AE; */
    width:100%;
    font-weight:100;
    font-size:0.6rem;
}
.sub-category label{
    font-size:0.4rem;
    padding-left: 1.2rem;
}
.category label{
    font-size:0.8rem;
    padding-left: 0.5rem;
}


  .navLink   a{
    line-height:2rem;
    margin:0 ;
    padding:0 3rem;
    list-style:none;
    text-decoration:none;
    /* color:#90A4AE; */
    font-weight:100;   
}}
`;


const MultiLevelDropDownMenu = () => {
    return (
        <NavBar>
            <div className="nav">
                <input type="checkbox" id="menu" />
                <label htmlFor="menu" id="nav-icon">&#9776;</label>

                <div className="multi-level">
                    <div className="category">
                        <input type="checkbox" id="candidate" />
                        <label htmlFor="candidate">Candidat</label>
                        <ul>
                            <div className="navLink">   <Link href="/creates/newCand" ><a>Nouveau Candidate</a></Link></div>
                            <div className="navLink">   <Link href="#" ><a>Login</a></Link></div>
                            <div className="navLink">   <Link href="/show/results/candCodeResults">
                                <a>Resultat Candidat</a>
                            </Link></div>
                            <div className="navLink">   <Link href="#" ><a>Inscription a l'Examen</a></Link></div>
                        </ul>

                    </div>
                    <div className="category">
                        <input type="checkbox" id="examiner" />
                        <label htmlFor="examiner">Examinateur</label>
                        <ul>
                            <div className="navLink">  <Link href="/creates/newExaminer">
                                <a>Inscription des Charge de centre </a>
                            </Link></div>
                            <div className="navLink">   <Link href="/modify/modifyExaminer">
                                <a>Modifier Charge de centre</a>
                            </Link></div>
                            <div className="navLink">   <Link href="/signInOut/signUp">
                                <a>SignUp</a>
                            </Link></div>
                        </ul>

                    </div>
                    <div className="category">
                        <input type="checkbox" id="center" />
                        <label htmlFor="center">Centre</label>
                        <ul>
                            <div className="navLink">   <Link href="/show/results/centerResults/getCompleteCenterResults">
                                <a>Resultats Complet</a>
                            </Link></div>
                            <div className="navLink">   <Link href="/show/results/centerResults/centerResultsPerSeries">
                                <a>Resultats par Serie</a>
                            </Link></div>

                            <div className="navLink">   <Link href="/show/results/candidateResults/getCandidateResultsFromRegNo">
                                <a>Resultats d'un Candidat</a>
                            </Link></div>
                        </ul>

                    </div>
                    <div className="category">
                        <input type="checkbox" id="administration" />
                        <label htmlFor="administration">Administration</label>
                        <ul>
                            <div className="navLink"></div>   <Link>
                                <div className="sub-category">
                                    <input type="checkbox" id="region" />
                                    <label htmlFor="region">Region</label>
                                    <ul>
                                        <div className="navLink"> <Link href="/creates/newRegion">
                                            <a>Nouvelle Region</a>
                                        </Link></div>
                                        <div className="navLink">  <Link href="/modify/modifyRegion">
                                            <a>Modifier Region</a>
                                        </Link></div>
                                    </ul>
                                </div>
                            </Link>
                            <div className="navLink"></div>   <Link>
                                <div className="sub-category">
                                    <input type="checkbox" id="division" />
                                    <label htmlFor="division">Departement</label>
                                    <ul>
                                        <div className="navLink">  <Link href="/creates/newDivision">
                                            <a>Nouvelle Departement</a>
                                        </Link></div>
                                        <div className="navLink">   <Link href="/modify/modifyDivision">
                                            <a>Modifier Departement</a>
                                        </Link></div>
                                    </ul>
                                </div>
                            </Link>
                        </ul>

                    </div>

                </div>

            </div>
        </NavBar>
    )
}

export default MultiLevelDropDownMenu

