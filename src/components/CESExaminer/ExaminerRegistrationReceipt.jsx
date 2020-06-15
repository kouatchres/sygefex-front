import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { MiniStyledPage } from "../styles/StyledPage";
import { getExaminerRegistrationQuery } from "../queries&Mutations&Functions/Queries";
import Error from "../ErrorMessage";
import styled from "styled-components";

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
  color: ${props => props.theme.pureWhite};
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


class ExaminerRegistrationReceipt extends Component {
    static propTypes = { id: PropTypes.string.isRequired };
    render() {
        return (
            <Query query={getExaminerRegistrationQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    { loading && <p>...Loading</p> }
                    { error && <Error error={error} /> }
                    console.log(data);
                    const { centerExamSessionExaminer } = data;
                    const { examiner, centerExamSession, phaseRank } = { ...centerExamSessionExaminer };
                    const { examSession, center } = { ...centerExamSession }
                    const { exam, session } = { ...examSession }
                    const { centerName } = center
                    const {
                        examiner1stName,
                        examiner2ndName,
                        examinerOtherNames,
                        examinerMatricule,
                        examinerPhone,
                        examinerCNI,
                        examinerImage,
                        examinerEmail,
                        gender
                    } = { ...examiner }

                    return (
                        <MiniStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Confirmation de poste d'Examinateur: {examiner1stName} {examiner2ndName} {examinerOtherNames}
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
                                                {centerName}
                                            </span>
                                            <span>
                                                <hr />
                                                <strong> Responsable de Centre D'Examen: </strong>
                                            </span>
                                            <span>
                                                <strong> Noms: </strong> {examiner1stName}  {examiner2ndName}  {examinerOtherNames}
                                            </span>
                                            <span>
                                                <strong> Poste: </strong> {phaseRank.rankName}
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

                                    </SchoolInfoBlock>
                                    <ResultsHeader>
                                        <CandPic>
                                            <img src={examinerImage} alt={examiner1stName} />
                                        </CandPic>
                                        <FirstInfo>

                                            <p>
                                                <span>
                                                    <strong> Information Detaillee: </strong>
                                                    <hr />
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Nom: </strong> {examiner1stName}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Nom: </strong> {examiner2ndName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Prenom: </strong> {examinerOtherNames}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Autre Noms: </strong> {examinerOtherNames}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> CNI: </strong> {examinerCNI}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Matricule: </strong> {examinerMatricule}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Sexe: </strong> {gender.genderName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Email: </strong>
                                                    {examinerEmail}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Phone: </strong>{examinerPhone}
                                                </span>
                                            </p>


                                        </FirstInfo>
                                    </ResultsHeader>

                                </FieldSetStyled>
                            </Form>
                        </MiniStyledPage>
                    );
                }}
            </Query>
        );
    }
}

export default ExaminerRegistrationReceipt;
