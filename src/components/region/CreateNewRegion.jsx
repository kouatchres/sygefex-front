import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import { Formik, Form, useFormikContext } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import Error from '../ErrorMessage'
import * as Yup from 'yup';
import { createNewRegionMutation } from '../queries&Mutations&Functions/Mutations'
import { removeTypename } from '../queries&Mutations&Functions/Fucntions'
import { getAllCountrysRegionCreateQuery } from '../queries&Mutations&Functions/Queries'

const InputGroup = styled.div`
padding-left:1rem;
    display: flex;
    flex-direction:column;
    /* margin:0 1rem; */
    margin-top:1rem auto;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;


const validationSchema = Yup.object().shape({
    regName: Yup.string()
        .required('Nom de Région obligatoire'),
    regCode: Yup.string()
        .required('Code de Région obligatoire'),

});

class CreateNewRegion extends Component {
    initialValues = {
        regName: '',
        regCode: '',
        country: ""
    }


    render() {
        return (
            <Query query={getAllCountrysRegionCreateQuery}  >

                {({ data, loading, error }) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    const { countries } = data
                    const [first] = countries && countries
                    const getCountry = removeTypename(first)
                    console.log(getCountry);
                    return (
                        <Mutation mutation={createNewRegionMutation} >
                            {(createRegion, { loading, error }) => (
                                <Formik
                                    OnValidationChange={false}
                                    initialValues={this.initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                        const res = await createRegion({
                                            variables: {
                                                ...values,
                                                country: getCountry && getCountry
                                            }
                                        })
                                        setTimeout(() => {
                                            console.log(JSON.stringify(values, null, 2));
                                            console.log(res)
                                            actions.resetForm(true);
                                            actions.setSubmitting(false);
                                        }, 400);
                                    }}

                                >
                                    <MinimStyledPage>
                                        <h4>Nouvelle Région</h4>
                                        <Error error={error} />
                                        <StyledForm disabled={loading} aria-busy={loading} >
                                            <Form>
                                                <AllControls>
                                                    <InputGroup>
                                                        <SygexInput
                                                            label="Nom Région"
                                                            id="regName"
                                                            name="regName"
                                                            type="text"
                                                        />
                                                        <SygexInput
                                                            label="Code Région"
                                                            id="regCode"
                                                            name="regCode"
                                                            type="text"
                                                        />

                                                    </InputGroup>
                                                    <ButtonStyled>
                                                        <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                                    </ButtonStyled>
                                                </AllControls>
                                            </Form>
                                        </StyledForm>
                                    </MinimStyledPage>
                                </Formik>
                            )
                            }
                        </Mutation>
                    )
                }
                }</Query >
        );
    }
}
export default CreateNewRegion;