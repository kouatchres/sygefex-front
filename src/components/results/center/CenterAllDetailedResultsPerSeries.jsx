import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { BiggestStyledPage } from "../../styles/StyledPage";
import { centerExamSessionSeriesResultsQuery } from "../../queries&Mutations&Functions/Queries";
import RegistrationDetails from './RegistrationDetails'
import Error from "../../ErrorMessage";
import styled from "styled-components";

const SeriesHeadings = styled.div`
  display: grid;
  grid-template-columns:3fr 1fr;
  grid-gap: 0.5rem;
  color: white;
  font-size: 1.7rem;
  justify-content: left;
  padding-left:0.5rem;
  background: ${props => props.theme.googleBlue};
`;

const TitleItem = styled.div`
  margin: 0 ;
  text-align: left;
  align-items: left;
justify-items: left;
	align-content: left;
`;


const CandidateInfoHeadings = styled.div`
	display: grid;
	grid-template-columns:2fr repeat(8, 1fr);
	grid-gap: 0.5rem;
    font-size:1.4rem;
    color: ${(props) => props.theme.pureWhite};
    background-color: ${(props) => props.theme.goldenBrown};
	border-bottom: 1px solid black;
    padding-left: 15px;
`;


const ExamCenterInfo = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr .5fr;
  grid-gap: 0.2rem;
  font-weight: bold;
  font-size:1.7rem;
  margin: 0 0.2rem;
justify-items: center;
align-items: center;
`;

class CenterAllDetailedResultsPerSeries extends Component {
    // static propTypes = { id: PropTypes.string.isRequired };
    render() {

        return (
            <Query query={centerExamSessionSeriesResultsQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    const { centerExamSessionSeries } = { ...data }
                    const { series, registration, centerExamSession } = { ...centerExamSessionSeries }
                    const { examSession, center } = { ...centerExamSession }
                    const { exam, session } = { ...examSession }

                    console.log(data)

                    return (

                        <BiggestStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Resultat Complets Du: {exam && exam.examName}, Session: {session && session.sessionName}, centre: {center && center.centerCode}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>

                                    <ExamCenterInfo>
                                        <p>
                                            <strong> Examen: </strong><span>{exam && exam.examName}</span>
                                        </p>
                                        <p>
                                            <strong> Centre: </strong><span>{center && center.centerName}</span>
                                        </p>
                                        <p>
                                            <strong> Session:</strong><span>{session && session.sessionName}</span>
                                        </p>
                                    </ExamCenterInfo>
                                    <SeriesHeadings>
                                        <TitleItem>
                                            <strong>Series: </strong><span>{series && series.seriesName}</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong>Code: </strong><span>{series && series.seriesCode}</span>
                                        </TitleItem>
                                    </SeriesHeadings>
                                    <CandidateInfoHeadings>
                                        <TitleItem>
                                            <strong> <span>No Candidat:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong> <span>Nom :</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong> <span>Prenom:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong> <span>Autres:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong> <span>Date:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong> <span>Lieu:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong>  <span>Sexe:</span></strong>
                                        </TitleItem>
                                        <TitleItem>
                                            <strong>  <span>Tel:</span></strong>
                                        </TitleItem>

                                        <TitleItem>
                                            <strong>  <span>Resultat:</span></strong>
                                        </TitleItem>

                                    </CandidateInfoHeadings>

                                    {
                                        registration && registration.map((item) => (
                                            <RegistrationDetails key={item.id} registration={item} />
                                        ))
                                    }
                                </fieldset>
                            </Form>
                        </BiggestStyledPage>
                    );
                }
                }
            </Query>

        );
    }
}

export default CenterAllDetailedResultsPerSeries;
