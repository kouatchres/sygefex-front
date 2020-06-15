import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { BiggestStyledPage } from "../../styles/StyledPage";
import Centers from './Centers'
import Error from "../../ErrorMessage";
import styled from "styled-components";
import { centersPerTownQuery } from "../../queries&Mutations&Functions/Queries";

const CenterHeadings = styled.div`
  display: grid;
  grid-template-columns:3.5fr 1.5fr 0.5fr 1.5fr 0.5fr;
  grid-gap: 1rem;
  color: white;
  font-size: 1.7rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
  padding-left:0.6rem;
`;

const TitleItem = styled.div`
  text-align: left;
  align-items: left;
justify-items: left;
	align-content: left;

`;

class CenterList extends Component {
    // static propTypes = { id: PropTypes.string.isRequired };
    render() {

        return (
            <Query query={centersPerTownQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    const { town } = { ...data }
                    const { center, townName, townCode } = { ...town }

                    console.log(data)

                    return (

                        <BiggestStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Les Centres D'Examen de la ville de: {townName}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>

                                    <CenterHeadings>

                                        <TitleItem>
                                            <span>Nom </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Code</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Numero</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Code pin</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Plus</span>
                                        </TitleItem>

                                    </CenterHeadings>
                                    {
                                        center && center.map((item) => (
                                            <Centers key={item.id} center={item} />
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

export default CenterList;
