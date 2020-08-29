import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Signout from "../user/Signout";
import Signup from "../user/Signup";

const ToolBarNavItem = styled.div`
  /* padding: 1.5rem; */
  * {
    box-sizing: border-box;
  }
  
    max-width: 100vw;
    height:0.9rem;
    margin: 0 auto;
    /* font-family:"Roboto Slab"; */
  } */

body {
  font-family: 'Roboto Slab', 'Open Sans', 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  margin: 0;
  padding: 0;
}
nav {
  background: ${(props) => props.theme.blues[2]};
  margin: 0;
  padding: 0 2rem;
  height: 3.5rem;
  align-items:center;
  width: 100vw;
  color: ${(props) => props.theme.pureWhite}
}

nav ul {
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
}
 
nav li {
  display: inline-block;
} 
nav a {
  text-decoration: none;
  display: block;
  color: ${(props) => props.theme.pureWhite};
  padding:0  0.5rem;
    :hover{
    color: ${(props) => props.theme.britishLightBlue};

  }
}

nav li:hover {
  border-top-right-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
  background: ${(props) => props.theme.pureWhite};
  color: ${(props) => props.theme.britishBlue};

}
  
  .menu-main  {
    padding-top:1rem;
    height: 3.5rem;
    font-size:1.6rem;
  }
  .menu-main a{
    padding:0 0.5rem;
  }
  .menu-sub {
  width: 100 %;
  position: absolute;
  background: ${(props) => props.theme.pureWhite};
  color: ${(props) => props.theme.britishBlue};
  display: none;
  padding: 1rem;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  box-shadow:${(props) => props.theme.formBS};
}
nav li:hover .menu-sub {
  display: block;
}
  .menu-sub li {
  display: block;
}
  .menu-sub a {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.britishBlue};
  /* margin: 0.1rem; */
}

  .menu-sub a:hover {
  text-decoration: underline;
}
  .menu-sub-user {
  width: 70 %;
  position: absolute;
  background: ${(props) => props.theme.blues[2]};
  color: ${(props) => props.theme.pureWhite};
  display: none;
  padding: 1rem;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
}
nav li:hover .menu-sub-user {
  display: block;
}
  .menu-sub-user li {
  display: block;
}
  .menu-sub-user a {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.pureWhite};
  /* margin: 0.1rem; */
}

  .menu-sub-user a:hover {
  text-decoration: underline;
}
  .menu-category {
  font-size: 1rem;
  margin-top: 0;
  color: ${(props) => props.theme.blues[2]};
  margin-bottom: 0.5rem;
  text-align: left;
  text-transform: uppercase;
}
  .menu-category:first-of-type {
  margin-top: 0;
  margin-bottom: 0;
}
  .menu-col-1,
  .menu-col-2,
  .menu-col-3,
  .menu-col-4 {
  float: left;
}
  .menu-col-1,
  .menu-col-2,
  .menu-col-3,
  .menu-col-4 {
  width: 25 %;
  padding: 1rem;
  border-right: 1px solid #fff;
}
  .menu-category:last-of-type {
  border-right: none;
}
hr {
  margin: 0;
  padding: 0;
}
@media(max-width:650){
  body{
    /* overflow-x: hidden; */
  }
  nav {
    position:absolute;
    right:0;
    height:90vh;
    top:3.5rem;
    background: ${(props) => props.theme.blues[2]};
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%
    transform: translateX(100%);
    transistion:transform 0.5s ease-in;
    
  }
  nav li{
    display:block;
    /* opacity:0; */
  }
  
}
`;

const MegaMenu = () => (
  <ToolBarNavItem>
    <nav>
      <div className="container">
        <ul className="menu-main">
          <li>
            <a href="/creates/login">Administration</a>
            <div className="menu-sub">
              <div className="menu-col-1">
                <ul>
                  <h3 className="menu-category">Region</h3>
                  <hr />
                  <Link href="/creates/newRegion">
                    <a>Nouvelle Region</a>
                  </Link>
                  <Link href="/modify/modifyRegion">
                    <a>Modifier Region</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Departement</h3>
                  <hr />
                  <Link href="/creates/newDivision">
                    <a>Nouveau Departement</a>
                  </Link>
                  <Link href="/modify/modifyDivision">
                    <a>Modifier Department</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Arrondissement</h3>
                  <hr />
                  <Link href="/creates/newSubDivision">
                    <a>Nouvel Arrondissement</a>
                  </Link>
                  <Link href="/modify/modifySubDivision">
                    <a>Modifier Arrondissement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Ville</h3>
                  <hr />
                  <Link href="/creates/newTown">
                    <a>Nouvelle Ville</a>
                  </Link>
                  <Link href="/modify/modifyTown">
                    <a>Modifier Ville</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Nouveau Centre</h3>
                  <hr />
                  <Link href="/creates/newCenter">
                    <a>Inscrire Centre D'examen'</a>
                  </Link>
                  <Link href="/modify/modifyCenter">
                    <a>Modifier Centre</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Notes</h3>
                  <hr />
                  <Link href="/creates/newMarks">
                    <a>Inscrire Notes</a>
                  </Link>
                  <Link href="/modify/modifyMarks">
                    <a>Modifier Notes</a>
                  </Link>
                </ul>
              </div>

              <div className="menu-col-2">
                <ul>
                  <h3 className="menu-category">Nouvelle Spécialité </h3>
                  <hr />
                  <Link href="/creates/newSpecialty">
                    <a>nouvelle Spécialité</a>
                  </Link>
                  <Link href="/modify/modifySpecialty">
                    <a>Modifier Spécialité</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Spécialité par Matière</h3>
                  <hr />
                  <Link href="/creates/newSubjectSpecialty">
                    <a>Spécialités</a>
                  </Link>
                  <Link href="/modify/modifySubjectSpecialty">
                    <a>Modifier Type Matière</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Inscription</h3>
                  <hr />
                  <Link href="/creates/newRegister">
                    <a> Nouvelle Inscription</a>
                  </Link>
                  <Link href="/modify/modifyRegistration">
                    <a>Modifier Inscription</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Poste</h3>
                  <hr />
                  <Link href="/creates/newRank">
                    <a>Nouveau Poste</a>
                  </Link>
                  <Link href="/modify/modifyRank">
                    <a>Modifier Poste</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Examen</h3>
                  <hr />
                  <Link href="/creates/newExam">
                    <a>Nouvel Examen</a>
                  </Link>
                  <Link href="/modify/modifyExam">
                    <a>Modifier Examen</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Resultats</h3>
                  <hr />
                  <Link href="/show/genCenterResults">
                    <a>Resultats Centre</a>
                  </Link>
                  <Link href="/show/results/candCodeResults">
                    <a>Resultat Candidat</a>
                  </Link>
                  <hr />
                </ul>
                <ul>
                  <h3 className="menu-category">Listes</h3>
                  <hr />
                  <Link href="/show/lists/centersPerTown">
                    <a>Centres par Ville</a>
                  </Link>
                  <Link href="/show/lists/subjPerSpecialty">
                    <a>Matieres par Spécialité</a>
                  </Link>
                  <Link href="/show/lists/subjPerSpecialty">
                    <a>Matieres par Spécialité</a>
                  </Link>

                  <hr />
                </ul>
              </div>
              <div className="menu-col-3">
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/creates/signup">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modify/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Session</h3>
                  <hr />
                  <Link href="/creates/newSession">
                    <a>Nouvelle Session</a>
                  </Link>
                  <Link href="/modify/modifySession">
                    <a>Modifier Session</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Rapports</h3>
                  <hr />
                  <Link href="/creates/newReport">
                    <a>charger rapport </a>
                  </Link>
                  <Link href="/modify/modifyReport">
                    <a>Modifier rapport</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Resultats Centre</h3>
                  <hr />
                  <Link href="/show/results/centerResults/getCompleteCenterResults">
                    <a>Resultats Complet du Centre</a>
                  </Link>
                  <Link href="/show/results/centerResults/centerResultsPerSpecialty">
                    <a>Resultats du Centre par Spécialité</a>
                  </Link>

                  <Link href="/show/results/candidateResults/getCandidateResultsFromRegNo">
                    <a>Resultats Du Candidat</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-4">
                <ul>
                  <h3 className="menu-category">Candidat</h3>
                  <hr />
                  <Link href="/creates/newGroupCand">
                    <a>nouveau Candidat</a>
                  </Link>
                  <Link href="/show/candidatePage">
                    <a>Liste Candidats</a>
                  </Link>
                  <Link href="/modify/modifyCandidate">
                    <a>Modifier Candidat</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Enseignement</h3>
                  <hr />
                  <Link href="/creates/newEducType">
                    <a>Nouveau Type D'enseignement</a>
                  </Link>
                  <Link href="/modify/modifyEducType">
                    <a>Modifier Type D'enseignement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Matière</h3>
                  <hr />
                  <Link href="/creates/newSubject">
                    <a>Nouvelle Matière </a>
                  </Link>
                  <Link href="/modify/modifySubject">
                    <a>Modifier Matière</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Charge de centre</h3>
                  <hr />
                  <Link href="/creates/newExaminer">
                    <a>Inscription des Charge de centre </a>
                  </Link>
                  <Link href="/modify/modifyExaminer">
                    <a>Modifier Charge de centre</a>
                  </Link>
                  <Link href="/signInOut/signUp">
                    <a>SignUp</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Phase de l'Examen</h3>
                  <hr />
                  <Link href="/creates/newPhase">
                    <a>Nouvelle Phase de l'Examen </a>
                  </Link>
                  <hr />
                  <Link href="/modify/modifyPhase">
                    <a>Nouvelle Phase de l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Postes aux Phases de l'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newPhaseRank">
                    <a>Postes aux Phases de l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Prof au centre d'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newCESExaminer">
                    <a>Prof s'inscrire au centre d'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Examen Pour Session par Centre
                  </h3>
                  <hr />
                  <Link href="/creates/newCenterExamSession">
                    <a>Inscrire Centre a l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Spécialité par Centre</h3>
                  <hr />
                  <Link href="/creates/newCESS">
                    <a>Inscrire Spécialité aux centres </a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/creates/newRegister">Candidate</a>
            <div className="menu-sub">
              <div className="menu-col-2">
                <ul>
                  <h3 className="menu-category">Inscription</h3>
                  <hr />
                  <Link href="/creates/newRegister">
                    <a> Nouvelle Inscription</a>
                  </Link>
                  <Link href="/modify/modifyRegistration">
                    <a>Modifier Inscription</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Resultats</h3>
                  <hr />
                  <Link href="/show/genCenterResults">
                    <a>Resultats Centre</a>
                  </Link>
                  <Link href="/show/results/candCodeResults">
                    <a>Resultat Candidat</a>
                  </Link>
                  <hr />
                </ul>
              </div>
              <div className="menu-col-3">
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/creates/signup">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modify/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Resultats Centre</h3>
                  <hr />
                  <Link href="/show/results/centerResults/getCompleteCenterResults">
                    <a>Resultats Complet du Centre</a>
                  </Link>
                  <Link href="/show/results/centerResults/centerResultsPerSpecialty">
                    <a>Resultats du Centre par Spécialité</a>
                  </Link>

                  <Link href="/show/results/candidateResults/getCandidateResultsFromRegNo">
                    <a>Resultats Du Candidat</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Candidat</h3>
                  <hr />
                  <Link href="/creates/newGroupCand">
                    <a>nouveau Candidat</a>
                  </Link>
                  <Link href="/show/candidatePage">
                    <a>Liste Candidats</a>
                  </Link>
                  <Link href="/modify/modifyCandidate">
                    <a>Modifier Candidat</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Charge de centre</h3>
                  <hr />
                  <Link href="/creates/newExaminer">
                    <a>Inscription des Charge de centre </a>
                  </Link>
                  <Link href="/modify/modifyExaminer">
                    <a>Modifier Charge de centre</a>
                  </Link>
                  <Link href="/signInOut/signUp">
                    <a>SignUp</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Phase de l'Examen</h3>
                  <hr />
                  <Link href="/creates/newPhase">
                    <a>Nouvelle Phase de l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Postes aux Phases de l'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newPhaseRank">
                    <a>Postes aux Phases de l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Prof au centre d'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newCESExaminer">
                    <a>Prof s'inscrire au centre d'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Examen Pour Session par Centre
                  </h3>
                  <hr />
                  <Link href="/creates/newCenterExamSession">
                    <a>Inscrire Centre a l'Examen </a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/creates/newRegister">Centre</a>
            <div className="menu-sub">
              <div className="menu-col-1">
                <ul>
                  <h3 className="menu-category">Notes</h3>
                  <hr />
                  <Link href="/creates/newMarks">
                    <a>Inscrire Notes</a>
                  </Link>
                  <Link href="/updates/updateMarks">
                    <a>Modifier Notes</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Inscription</h3>
                  <hr />
                  <Link href="/creates/newRegister">
                    <a> Nouvelle Inscription</a>
                  </Link>
                  <Link href="/creates/newMultiRegister">
                    <a>Inscription en Group </a>
                  </Link>
                  <Link href="/modify/modifyRegistration">
                    <a>Modifier Inscription</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Resultats</h3>
                  <hr />
                  <Link href="/show/genCenterResults">
                    <a>Resultats Centre</a>
                  </Link>
                  <Link href="/show/results/candCodeResults">
                    <a>Resultat Candidat</a>
                  </Link>
                  <hr />
                </ul>
                <ul>
                  <h3 className="menu-category">Listes</h3>
                  <hr />
                  <Link href="/show/lists/centersPerTown">
                    <a>Centres par Ville</a>
                  </Link>
                  <Link href="/show/lists/subjPerSpecialty">
                    <a>Matieres par Spécialité</a>
                  </Link>
                  <Link href="/show/lists/subjPerSpecialty">
                    <a>Matieres par Spécialité</a>
                  </Link>

                  <hr />
                </ul>
              </div>
              <div className="menu-col-2">
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/creates/signup">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modify/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Resultats Centre</h3>
                  <hr />
                  <Link href="/show/results/centerResults/getCompleteCenterResults">
                    <a>Resultats Complet du Centre</a>
                  </Link>
                  <Link href="/show/results/centerResults/centerResultsPerSpecialty">
                    <a>Resultats du Centre par Spécialité</a>
                  </Link>

                  <Link href="/show/results/candidateResults/getCandidateResultsFromRegNo">
                    <a>Resultats Du Candidat</a>
                  </Link>
                </ul>

                <ul>
                  <h3 className="menu-category">Candidat Solo</h3>
                  <hr />
                  <Link href="/creates/newCand">
                    <a>Nouveau Candidat</a>
                  </Link>
                  <Link href="/creates/newGroupCand">
                    <a>Plusieures Candidats</a>
                  </Link>
                  <Link href="/show/candidatePage">
                    <a>Liste Candidats</a>
                  </Link>
                  <Link href="/modify/modifyCandidate">
                    <a>Modifier Candidat</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Charge de centre</h3>
                  <hr />
                  <Link href="/creates/newExaminer">
                    <a>Inscription des Charge de centre </a>
                  </Link>
                  <Link href="/modify/modifyExaminer">
                    <a>Modifier Charge de centre</a>
                  </Link>
                  <Link href="/signInOut/signUp">
                    <a>SignUp</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Prof au centre d'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newCESExaminer">
                    <a>Prof s'inscrire au centre d'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Examen Pour Session par Centre
                  </h3>
                  <hr />
                  <Link href="/creates/newCenterExamSession">
                    <a>Inscrire Centre a l'Examen </a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Spécialité par Centre</h3>
                  <hr />
                  <Link href="/creates/newCESS">
                    <a>Inscrire Spécialité aux centres </a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/creates/newRegister">Examinateur</a>
            <div className="menu-sub">
              <div className="menu-col-1">
                <ul>
                  <h3 className="menu-category">Notes</h3>
                  <hr />
                  <Link href="/creates/newMarks">
                    <a>Inscrire Notes</a>
                  </Link>
                  <Link href="/modify/modifyMarks">
                    <a>Modifier Notes</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/creates/newUser">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modify/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Rapports</h3>
                  <hr />
                  <Link href="/creates/newReport">
                    <a>charger rapport </a>
                  </Link>
                  <Link href="/modify/modifyReport">
                    <a>Modifier rapport</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Charge de centre</h3>
                  <hr />
                  <Link href="/creates/newExaminer">
                    <a>Inscription des Charge de centre </a>
                  </Link>
                  <Link href="/modify/modifyExaminer">
                    <a>Modifier Charge de centre</a>
                  </Link>
                  <Link href="/signInOut/signUp">
                    <a>SignUp</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">
                    Inscrire Prof au centre d'Examen
                  </h3>
                  <hr />
                  <Link href="/creates/newCESExaminer">
                    <a>Prof s'inscrire au centre d'Examen </a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/creates/newRegister">Utilisateur</a>
            <div className="menu-sub-user">
              <div className="menu-col-1">
                <ul>
                  <h3 className="menu-category">Login/Signup</h3>
                  <hr />
                  <Link href="/creates/reset">
                    <a>Changer mot de passe</a>
                  </Link>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/creates/newRegister">Contact</a>
          </li>
          <li>
            <a href="/creates/newRegister">Nous</a>
          </li>
          <li>
            <Signout />
          </li>
          <li>
            <a href="/creates/signup">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  </ToolBarNavItem>
);
export default MegaMenu;
