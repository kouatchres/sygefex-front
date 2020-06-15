import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
// import Form from '../../styles/Form'
import { MiniStyledPage } from '../../styles/MiniStyledPage'
import { format } from 'date-fns'
import ResultDetails from './ResultDetails'
import { Formik, Form } from 'formik';
import { SygexInput, customStyle, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'

import { getCandidateResultsQuery } from '../../queries&Mutations&Functions/Queries'
import Error from '../../ErrorMessage'
import styled from 'styled-components'
import {
    roundFloatNumber,
    calcCandTotalScore,
    calcCandTotalCoeff,
    calcCandAve,
} from '../../queries&Mutations&Functions/Functions'

const AveTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.5rem;
  grid-gap: 1rem;
  color: white;
  background: ${props => props.theme.goldenBrown};
  align-items: center;
  justify-items: center;
  border-bottom: 0.1rem solid black;
  padding-left: 0.2rem;
`;

const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
  color: white;
  font-size: 1.5rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  text-align: left;
  /* padding-left: 15px; */
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 18fr;
  justify-items: center;
  align-items: center;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`;

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem,1fr));
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`;

const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: colums;
  background: ${props => props.theme.blues[2]};
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.2rem;
  border-bottom: 0.1rem solid ${props => props.theme.black};
`;
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  img {
    height: 30vh;
    width: 15vw;
    border-radius: 0.5rem;
  }
`;

const FirstInfo = styled.div`
text-align:left;
  display: block;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 0.3rem;
`;

const CandDetailedResultsHook = () => {
    const static propTypes = { id: PropTypes.string.isRequired }

    const { data, error, loading } = useQuery(getCandidateResultsQuery, {
        variables={ id: this.props.id }
    })
    const getRegistration = data && data.registration
    const {
        candidate,
        centerExamSessionSeries,
        scores,
        candRegistrationNumber,
    } = { ...getRegistration }
    const { centerExamSession, series } = { ...centerExamSessionSeries }
    const { examSession, center } = { ...centerExamSession }
    const { exam, session } = { ...examSession }

    return (
        <Formik
            method="GET"
            {/* initialValues={initialValues}
            validationSchema={validationSchema} */}
        >
            {({ isSubmitting }) => {
                return (
                    <MiniStyledPage>
                        <Form>
                            <h4>
                                Resultat Du: {exam && exam.examName}, Session:
                  {session && session.sessionName}, de:-
                  {candidate && candidate.cand1stName}
                                {candidate && candidate.cand2ndName}
                            </h4>
                            <Error error={error} />
                            <fieldset disabled={loading} aria-busy={loading}>
                                <SchoolInfoBlock>
                                    <SchoolInfo>
                                        <span>
                                            <strong> Centre D'Examen: </strong>
                                            <hr />
                                        </span>
                                        <span>
                                            {center && center.centerName}
                                        </span>
                                    </SchoolInfo>
                                    <SchoolInfo2>
                                        <span>
                                            <strong> Examen: </strong> {exam && exam.examName}
                                        </span>
                                        <span>
                                            <strong> Session: </strong>
                                            {session && session.sessionName}
                                        </span>
                                    </SchoolInfo2>
                                    <SchoolInfo>
                                        <span>
                                            <strong> Numero d'Inscription: </strong>
                                            {candRegistrationNumber}
                                        </span>
                                        <span>
                                            <strong> Specialization: </strong>
                                            <hr />
                                        </span>
                                        <span>
                                            {series && series.seriesName}
                                        </span>
                                    </SchoolInfo>
                                </SchoolInfoBlock>
                                <ResultsHeader>
                                    <CandPic>
                                        <img
                                            src={candidate && candidate.image}
                                            alt={candidate && candidate.cand1stName}
                                        />
                                    </CandPic>
                                    <FirstInfo>
                                        <p>
                                            <span>
                                                <strong> Nom: </strong>
                                                {candidate && candidate.cand1stName}
                                            </span>
                                        </p>

                                        <p>
                                            <span>
                                                <strong> Prenom: </strong>
                                                {candidate && candidate.cand2ndName}
                                            </span>
                                        </p>

                                        <p>
                                            <span>
                                                <strong> Autres Noms: </strong>
                                                {candidate && candidate.cand3rdName}
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>Naissance: </strong>
                                                <hr />
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong> Date: </strong>
                                                {format(candidate && candidate.dateOfBirth, 'd MMMM, YYYY ')}
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong> Lieu: </strong>
                                                {candidate && candidate.placeOfBirth}
                                            </span>
                                        </p>

                                        <p>
                                            <span>
                                                <strong> Sexe: </strong>
                                                {candidate && candidate.gender.genderName}
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong> Email: </strong>
                                                <hr />
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                {candidate && candidate.email}
                                            </span>
                                        </p>

                                        <p>
                                            <span>
                                                <strong> Noms des parents: </strong>
                                                <hr />
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>Père: </strong>
                                                {candidate && candidate.dadName}
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>Mère: </strong>
                                                {candidate && candidate.momName}
                                            </span>
                                        </p>
                                    </FirstInfo>
                                </ResultsHeader>
                                <SubjectTitles>
                                    <TitleItem>
                                        <span>Matiere</span>
                                    </TitleItem>
                                    <TitleItem>
                                        <span>Coeff </span>
                                    </TitleItem>
                                    <TitleItem>
                                        <span>Moyenne </span>
                                    </TitleItem>
                                    <TitleItem>
                                        <span>Total </span>
                                    </TitleItem>
                                </SubjectTitles>
                                {scores &&
                                    scores.map(score => (
                                        <ResultDetails
                                            key={score.subjectSeries.id}
                                            score={score}
                                        />
                                    ))}
                                <AveTotals>
                                    <span>
                                        <strong>
                                            Total Matieres:
                        {score && roundFloatNumber(calcCandTotalScore(scores), 4)}
                                        </strong>
                                    </span>
                                    <span>
                                        <strong>
                                            Somme Coefficients:
                        {score && roundFloatNumber(calcCandTotalCoeff(scores), 4)}
                                        </strong>
                                    </span>
                                    <span>
                                        <strong>
                                            Moyenne:
                        {score && roundFloatNumber(calcCandAve(scores), 4)}
                                        </strong>
                                    </span>
                                </AveTotals>
                            </fieldset>
                        </Form>
                    </MiniStyledPage>
                )
            }}
        </Formik>

    )
}

export default CandDetailedResultsHook
