import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { MiniStyledPage } from "../styles/StyledPage";
import { format } from "date-fns";
import SubjectList from '../results/candidate/SubjectList'
import { getCandidateResultsQuery } from "../queries&Mutations&Functions/Queries";
import Error from "../ErrorMessage";
import styled from "styled-components";

const SubjectTitles = styled.div`
  display: flex;
  color: ${props => props.theme.pureWhite};
  font-size: 1.5rem;
  justify-content: left;
  background: ${props => props.theme.blues[2]};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  width: 25%;
  text-align: left;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;
const FieldSetStyled = styled.fieldset`
min-width: 20rem;
`;
const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow:colums;
  background: ${props => props.theme.blues[2]};
  color:${props => props.theme.pureWhite};
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
  padding:0.2rem;
border-bottom: .1rem solid ${props => props.theme.black};

`;
const CandPic = styled.div`
  display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	img {
		margin-top: .5rem;
		margin-left: .5rem;
		height: 15rem;
		width: 13rem;
		border-radius: 0.7rem;
		background-size: contain;
		background-position: center;
	}
`;

const FirstInfo = styled.div`
  display: block;
  text-align:left;
  flex-direction: column;
  font-size:1.5rem;
  line-height:0.3rem;
  min-width: 13rem;
`;

const Signature = styled.div`
margin-top:1.5rem;
padding:3rem;
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
grid-gap:3rem;
  font-size:1.5rem;
  line-height:0.3rem;
  justify-content: center;
  align-items: center;
`;

class RegistrationReceipt extends Component {

    static propTypes = { id: PropTypes.string.isRequired };
    render() {
        return (
            <Query query={getCandidateResultsQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    { loading && <p>...Loading</p> }
                    { error && <Error error={error} /> }
                    const { registration } = data;
                    const { candidate, centerExamSessionSeries, createdAt, scores, candRegistrationNumber } = { ...registration };
                    const { centerExamSession, series } = { ...centerExamSessionSeries }
                    const { examSession, center } = { ...centerExamSession }
                    const { exam, session } = { ...examSession }

                    return (
                        <MiniStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Reçu d'inscription de: {candidate.cand1stName} {candidate.cand2ndName} {candidate.cand3rdName}
                                </h4>
                                <Error error={error} />
                                <FieldSetStyled disabled={loading} aria-busy={loading}>
                                    <SchoolInfoBlock>
                                        <SchoolInfo>
                                            <span>
                                                <strong> Centre D'Examen: </strong>
                                                <hr />
                                            </span>
                                            <span>
                                                {center.centerName}
                                            </span>
                                        </SchoolInfo>
                                        <SchoolInfo2>
                                            <span>
                                                <strong> Examen: </strong> {exam.examName}
                                            </span>
                                            <span>
                                                <strong> Session: </strong> {session.sessionName}
                                            </span>
                                        </SchoolInfo2>
                                        <SchoolInfo>
                                            <span>
                                                <strong>Info Inscritption: </strong>
                                                <hr />
                                            </span>
                                            <span>
                                                <strong> Numero: </strong> {candRegistrationNumber}
                                            </span>
                                            <span>
                                                <strong> Date: </strong> {format(createdAt, 'd  MMM, yyyy , HH:MM:SS')}
                                            </span>


                                            <span>
                                                <strong> Specialization: </strong>
                                                <hr />
                                            </span>
                                            <span>
                                                {series.seriesName}
                                            </span>
                                        </SchoolInfo>
                                    </SchoolInfoBlock>
                                    <ResultsHeader>
                                        <CandPic>
                                            <img src={candidate.image} alt={candidate.cand1stName} />
                                        </CandPic>
                                        <FirstInfo>
                                            <p>
                                                <span>
                                                    <strong> Nom: </strong> {candidate.cand1stName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Prenom: </strong> {candidate.cand2ndName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Autres Noms: </strong>
                                                    {candidate.cand3rdName}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <hr />
                                                    <strong>Naissance: </strong>
                                                    <hr />
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Lieu: </strong> {candidate.placeOfBirth}
                                                </span>
                                            </p>


                                            <p>
                                                <span>
                                                    <strong> Date: </strong>
                                                    {format(candidate.dateOfBirth, "d MMMM, YYYY ")}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Sexe: </strong> {candidate.gender.genderName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Email: </strong>
                                                    {candidate.email}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <hr />
                                                    <strong> Noms des parents: </strong>
                                                    <hr />
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong>Père: </strong> {candidate.dadName}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong>Mère: </strong> {candidate.momName}
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

                                    </SubjectTitles>
                                    {scores.map(score => (
                                        <SubjectList key={score.subjectSeries.id} score={score} />
                                    ))}
                                    <Signature>
                                        <FirstInfo>Candidat:</FirstInfo>
                                        <FirstInfo>Proviseur/Directeur:</FirstInfo>
                                    </Signature>
                                </FieldSetStyled>
                            </Form>
                        </MiniStyledPage>
                    );
                }}
            </Query>
        );
    }
}

export default RegistrationReceipt;
