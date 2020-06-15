import React from 'react'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAllCountrysQuery, getAllRegionsOfACountryQuery } from '../queries&Mutations&Functions/Queries'
import { removeTypename, getObjectFromID } from '../queries&Mutations&Functions/Functions'
import { createDivisionMutation } from '../queries&Mutations&Functions/Mutations'


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
        divName: Yup
            .string()
            .required('Nom Département Obligatoire'),
        divCode: Yup
            .string()
            .required('Code Département Obligatoire'),
        region: Yup
            .object()
            .required('Région Obligatoire')
    });



const NewDivisionHooks = () => {


    const { data, loading: loadingCount, error: errorCount } = useQuery(getAllCountrysQuery)
    { loadingCount && <p>Loading Countries from DB...</p> }
    { errorCount && <Error error={error} /> }
    const { countries } = { ...data }
    console.log(countries);
    const reducedCountries = countries && countries.reduce((item) => item)
    const refinedCountry = removeTypename(reducedCountries)
    console.log(refinedCountry);
    const { id } = { ...refinedCountry }
    console.log(id);



    const { data: dataRegions, loading: loadingReg, error: errorReg } = useQuery(getAllRegionsOfACountryQuery, { variables: { id } })
    { loadingReg && <p>Loading regions from DB...</p> }
    { errorReg && <Error error={errorReg} /> }
    const getCountry = dataRegions && dataRegions.country
    const { region } = { ...getCountry }
    console.log(dataRegions);
    const getRegionsOptions = region && region.map((item) => ({
        value: item.id, label: item.regName
    }))
    const [createDivision, { loading, error }] = useMutation(createDivisionMutation, {
        refetchQueries: ["getAllDivisionsQuery"]
    })

    return (

        <Formik
            method="POST"
            initialValues={{ divName: "", divCode: "", region: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createDivision({
                    variables:
                    {
                        ...values,
                        region: values.region && getObjectFromID(values.region.value)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ setFieldValue, isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4>Nouveau Département</h4>
                        <Error error={error} />
                        <StyledForm disabled={loading} aria-busy={loading} >
                            <Form>
                                <AllControls>
                                    <InputGroup>

                                        <SygefexSelect options={getRegionsOptions} name="region" onChange={value => setFieldValue('region', value)} placeholder="la Région" disabled={isSubmitting} />
                                        <SygexInput name="divName" type="text" label="Nom Département" />
                                        <SygexInput name="divCode" type="text" label="Code Département" />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
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
export default NewDivisionHooks