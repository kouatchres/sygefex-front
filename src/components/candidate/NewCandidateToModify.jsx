import React from 'react';
import Form from '../styles/Form';
import { MinimStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import Router from 'next/router'
import useForm from '../utils/useForm'
import debounce from 'lodash.debounce'
import { ApolloConsumer } from 'react-apollo'
import { getCandidateIDQuery } from '../queries&Mutations&Functions/Queries';

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

const NewCandidateToModify = () => {
    const [state, setState] = useForm({
        id: "",
        loading: "true"
    });


    const onChange = debounce(async (e, client) => {
        console.log('seaching')
        const res = await client.query({
            query: getCandidateIDQuery,
            variables: { candCode: e.target.value }
        })
        setState({
            id: res.data.candidateCode.id,
            loading: false,
        })
    }, 200)
    console.log(state.id)

    state.id && Router.push({
        pathname: '/updates/updateCand',
        query: { id: state.id }
    });
    return (
        <MinimStyledPage >
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    resetForm();
                }}>
                <h4> Modification d'Info Candidat</h4>
                <fieldset >
                    <StyledDivision >
                        <CenterSelect>
                            <ApolloConsumer>

                                {(client) => (

                                    <input
                                        type="search"
                                        placeholder="Code Candidat"
                                        onChange={(e) => {
                                            e.persist()
                                            onChange(e, client)
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

export default NewCandidateToModify;

