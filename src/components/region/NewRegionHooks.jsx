import React from 'react'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAllCountrysQuery, getAllRegionsQueries } from '../queries&Mutations&Functions/Queries'
import { removeTypename, getObjectFromID } from '../queries&Mutations&Functions/Functions'
import { createNewRegionMutation } from '../queries&Mutations&Functions/Mutations'


const InputGroup = styled.div`
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const validationSchema = Yup
    .object()
    .shape({
        regName: Yup
            .string()
            .required('Nom Région Obligatoire'),
        regCode: Yup
            .string()
            .required('Code Région Obligatoire'),
        // country: Yup
        //     .object()
        //     .required('Pays Obligatoire')
    });



const NewRegionHooks = () => {


    const initialValues = {
        regName: "",
        regCode: "",
        country: ""
        //   country: refinedCountry && getObjectFromID(id)
    }

    const { data, loading: loadingCount, error: errorCount } = useQuery(getAllCountrysQuery)
    { loadingCount && <p>Loading Countries from DB...</p> }
    { errorCount && <Error error={error} /> }
    const { countries } = { ...data }
    const reducedCountries = countries && countries.reduce((item) => item)
    const refinedCountry = reducedCountries && removeTypename(reducedCountries)
    const { id } = { ...refinedCountry }

    const [createRegion, { loading, error }] = useMutation(createNewRegionMutation, {
        refetchQueries: ["getAllRegionsQueries"]
    })

    return (

        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createRegion({
                    variables:
                    {
                        ...values,
                        country: refinedCountry && getObjectFromID(id)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4>Nouvelle Région</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>

                                        <SygexInput name="regName" type="text" label="Nom la Région" />
                                        <SygexInput name="regCode" type="text" label="Code la Région" />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit" disabled={isSubmitting}>Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                                    </ButtonStyled>
                                </AllControls>
                            </Form>
                        </StyledForm>
                    </MinimStyledPage>
                )
            }}
        </Formik>
    )
}
export default NewRegionHooks