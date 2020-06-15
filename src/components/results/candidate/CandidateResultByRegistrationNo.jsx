import React, { Component } from 'react';
import Form from '../../styles/Form';
import { MinimStyledPage } from '../../styles/StyledPage';
import Error from '../../ErrorMessage';
import styled from 'styled-components';
import Router from 'next/router'
import debounce from 'lodash.debounce'
import { ApolloConsumer } from 'react-apollo'
import { getRegistrationIDFromRegNumberQuery } from '../../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	text-align: center;
	margin: 0 auto;
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
`;

class CandidateResultByRegistrationNo extends Component {
    state = {
        id: "",
        loading: "false"
    };

    handleChange = (e) => {
        this.setState({ loading: true })
        const { name, value, type } = e.target;
        const val = type === 'number'
            ? parseInt(value)
            : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ candRegistrationNumber: '' });
    };

    makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            candRegistrationNumber: `${candCodeValue}`
        };
        return storedCandidate;
    };
    onChange = debounce(async (e, client) => {
        console.log('seaching')
        const res = await client.query({
            query: getRegistrationIDFromRegNumberQuery,
            variables: { candRegistrationNumber: e.target.value }
        })
        console.log(res.data)
        const getCandNumber = { ...res.data.candidateRegistrationNumber };
        this.setState({
            id: getCandNumber.id,
            loading: false,
        })
    }, 400)
    render() {
        const { id } = this.state;
        id && Router.push({
            pathname: '/show/results/candResults',
            query: { id },

        });
        return (
            <MinimStyledPage >
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        this.resetForm();
                    }}>
                    <h4 >
                        Résultats D'un Candidat
                   </h4>
                    <fieldset >
                        <StyledDivision >
                            <CenterSelect>
                                <ApolloConsumer>
                                    {(client) => (

                                        <input
                                            type="search"
                                            placeholder="Numéro d'Inscription du Candidat"
                                            onChange={(e) => {
                                                e.persist()
                                                this.onChange(e, client)
                                            }}
                                        />
                                    )}
                                </ApolloConsumer>
                            </CenterSelect>
                        </StyledDivision>
                    </fieldset>
                </Form>
            </MinimStyledPage>

        );
    }
}

export default CandidateResultByRegistrationNo;

