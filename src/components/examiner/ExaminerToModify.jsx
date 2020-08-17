import React from 'react';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import useForm from '../utils/useForm'
import styled from 'styled-components';
import Router from 'next/router'
import debounce from 'lodash.debounce'
import { ApolloConsumer } from 'react-apollo'
import { getExaminerIDQuery } from '../queries&Mutations&Functions/Queries';

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

const ExaminerToModify = (props) => {

    const [state, setState] = useForm({
        id: "",
        loading: "false"
    })

    const makeCandVariableObject = (examinerCodeValue) => {
        const storedCandidate = {
            examinerCode: `${examinerCodeValue}`
        };
        return storedCandidate;
    };
    const onChange = debounce(async (e, client) => {
        console.log('seaching')
        const res = await client.query({
            query: getExaminerIDQuery,
            variables: { examinerCode: e.target.value }
        })
        setState({
            id: res.data.examinerByCode.id,
            loading: false,
        })
    }, 200)



    state.id && Router.push({
        pathname: '/updates/updateExaminer',
        query: { id: state.id }
    });
    return (
        <MiniStyledPage >
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    resetForm();
                }}>
                <h4 >
                    Modification d'Info Examinateur
                    </h4>
                <fieldset >
                    <StyledDivision >
                        <CenterSelect>
                            <ApolloConsumer>
                                {(client) => (

                                    <input
                                        type="search"
                                        name="search"
                                        label="Code Examinateur"
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
        </MiniStyledPage>

    );
}

export default ExaminerToModify;

