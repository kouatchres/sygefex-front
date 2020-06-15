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
import { createSubDivisionMutation } from '../queries&Mutations&Functions/Mutations'
import useForm from '../utils/useForm'


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
        // subDivName: Yup
        //     .string()
        //     .required('Nom arrondissement Obligatoire'),
        // subDivCode: Yup
        //     .string()
        //     .required('Code arrondissement Obligatoire'),

    });



const NewSubDivisionHooks = () => {

    const [state, handleReactSelectChange] = useForm({ regionID: "" })

    const initialValues = {
        subDivName: "",
        subDivCode: "",
        division: ""
    }

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
    const getRegionsOptions = region && region.map((item) => (
        {
            value: item.id, label: item.regName
        }))
    console.log(state.regionID);

    const [createSubDivision, { loading, error }] = useMutation(createSubDivisionMutation, {
        refetchQueries: ["getAllSubDivisionsQuery"]
    })


    return (

        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm, ) => {
                const res = await createSubDivision({
                    variables:
                    {
                        ...values,
                        division: values.division && getObjectFromID(values.division.value)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.setSubmitting(false);
                    actions.resetForm(true);
                }, 400);
            }}>
            {({ isSubmitting, setFieldValue }) => {
                return (
                    <MinimStyledPage>
                        <h4>Nouvel Arrondissement</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
                            <Form>
                                <AllControls>
                                    <InputGroup>

                                        <SygefexSelect onChange={handleReactSelectChange} name="regionID" placeholder="La Région" options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygefexSelect name="division" onChange={value => setFieldValue('division', value)} label="" placeholder="Le Département" options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygexInput name="subDivName" type="text" label="Libéllé de l'arrondissement" />
                                        <SygexInput name="subDivCode" type="text" label="Code de l'arrondissement" />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
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
export default NewSubDivisionHooks