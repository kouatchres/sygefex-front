import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { BiggestStyledPage } from "../../styles/StyledPage";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";
import SeriesTitles from './SeriesTitles'
import Error from "../../ErrorMessage";
import styled from "styled-components";

const SeriesHeadings = styled.div`
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 1rem;
  color: white;
  font-size: 1.7rem;
  justify-content: left;
  background: ${props => props.theme.blues[2]};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  text-align: left;
  
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

class CenterAllDetailedResults extends Component {
    // static propTypes = { id: PropTypes.string.isRequired };
    render() {

        return (
            <Query query={centerExamSessionForResultsQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    const { centerExamSession } = { ...data }
                    const { examSession, center, centerExamSessionSeries } = { ...centerExamSession }
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
                                    Resultat Complets Du: {exam.examName}, Session: {session.sessionName}, centre: {center.centerCode}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>

                                    <ExamCenterInfo>
                                        <p>
                                            <strong> Examen: </strong><span>{exam.examName}</span>
                                        </p>
                                        <p>
                                            <strong> Centre: </strong><span>{center.centerName}</span>
                                        </p>
                                        <p>
                                            <strong> Session:</strong><span>{session.sessionName}</span>
                                        </p>
                                    </ExamCenterInfo>

                                    <SeriesHeadings>

                                        <TitleItem>
                                            <span>Libelle Serie </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Code Serie </span>
                                        </TitleItem>

                                    </SeriesHeadings>
                                    {
                                        centerExamSessionSeries && centerExamSessionSeries.map((item) => (
                                            <SeriesTitles key={item.series.id} CESS={item} />
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

export default CenterAllDetailedResults;
