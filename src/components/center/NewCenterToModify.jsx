import React from 'react';
import Form from '../styles/Form';
import { MinimStyledPage } from '../styles/StyledPage';
import useForm from '../utils/useForm'
import styled from 'styled-components';
import Router from 'next/router'
import debounce from 'lodash.debounce'
import { ApolloConsumer } from 'react-apollo'
import { getCenterIDFromCenterCodeQuery } from '../queries&Mutations&Functions/Queries';

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

const NewCenterToModify = () => {
    const [state, setState] = useForm({
        id: "",
        loading: "false"
    })


    const onChange = debounce(async (e, client) => {
        console.log('seaching')
        const res = await client.query({
            query: getCenterIDFromCenterCodeQuery,
            variables: { centerSecretCode: e.target.value }
        })
        setState({
            id: res.data.getCenterByCode.id,
            loading: false,
        })
    }, 200)

    const { id } = state;

    id && Router.push({
        pathname: '/updates/updateCenter',
        query: { id }
    });

    return (

        <MinimStyledPage>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    resetForm();
                }}>
                <h4 > Correction Info Centre</h4>
                <fieldset >
                    <StyledDivision >
                        <CenterSelect>
                            <ApolloConsumer>
                                {(client) => (

                                    <input
                                        type="search"
                                        placeholder="Code Centre"
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

export default NewCenterToModify;

