import React, { Component } from 'react';
import Form from '../styles/Form';
import { MinimStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
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

class NewCenterToModify extends Component {
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
        this.setState({ candCode: '' });
    };

    makeCandVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerCode: `${centerCodeValue}`
        };
        return storedCenter;
    };
    onChange = debounce(async (e, client) => {
        console.log('seaching')
        const res = await client.query({
            query: getCenterIDFromCenterCodeQuery,
            variables: { centerCode: e.target.value }
        })
        this.setState({
            id: res.data.centerCode.id,
            loading: false,
        })
    }, 400)
    render() {
        const { id } = this.state;

        id && Router.push({
            pathname: '/updates/updateCenter',
            query: { id }
        });
        return (
            <MinimStyledPage>

                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        this.resetForm();
                    }}>
                    <h4 >
                        Correction Info Centre
                    </h4>
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

export default NewCenterToModify;

