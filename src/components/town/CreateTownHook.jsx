
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik';
import {SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createTownMutation } from '../queries&Mutations&Functions/Mutations'
import { removeTypename, getObjectFromID } from '../queries&Mutations&Functions/Functions'
import {
    getAllCountrysQuery,
    getAllTownsQuery,
    getDivisionsOfARegionQuery,
    getAllRegionsOfACountryQuery,
    getSubDivisionsOfADivisionQuery
} from '../queries&Mutations&Functions/Queries'

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
        subDiv: Yup
            .string()
            .required("Choix Du type d'Enseignement Obligatoire"),
        townName: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        townCode: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
    });

const CreateTownHook = () => {
    const initialValues = {
        townName: "",
        townCode: "",
        subDiv: ""
    }
    const [state, setState, handleReactSelectChange] = useForm({ regionID: "", divisionID: "" })

    const { data, loading: loadingCount, error: errorCount } = useQuery(getAllCountrysQuery)
    { loadingCount && <p>Loading Countries from DB...</p> }
    { errorCount && <Error error={error} /> }
    const { countries } = { ...data }
    console.log(countries);
    const reducedCountries = countries && countries.reduce((item) => item)
    console.log(reducedCountries);
    const { id } = { ...reducedCountries }
    console.log(id);


    const { data: dataCountry, loading: loadingCountry, error: errCountry } = useQuery(getAllRegionsOfACountryQuery, {
        variables: { id: id }
    })
    { loadingCountry && <p>loading...</p>; }
    { errCountry && <Error error={errCountry} />; }
    console.log(dataCountry);
    const getCountry = dataCountry && dataCountry.country;
    console.log(getCountry);
    const { region } = { ...getCountry }
    const getRegionsOptions =
        region &&
        region.map(item => ({ value: item.id, label: item.regName }));
    console.log(state.regionID);

    const { data: dataRegion, loading: loadingRegion, error: errRegion } = useQuery(getDivisionsOfARegionQuery, {
        skip: !state.regionID,
        variables: { id: state.regionID }
    })
    { loadingRegion && <p>loading...</p>; }
    { errRegion && <Error error={errRegion} />; }
    console.log(dataRegion);
    const getRegion = dataRegion && dataRegion.region
    const { division } = { ...getRegion }
    console.log(division);
    const getDivOptions = division && division.map(item => ({ value: item.id, label: item.divName }))

    console.log(state.divisionID);

    const { data: dataDivision, loading: loadingDivision, error: errDivision } = useQuery(getSubDivisionsOfADivisionQuery, {
        skip: !state.divisionID,
        variables: { id: state.divisionID }
    })
    { loadingDivision && <p>loading...</p>; }
    { errDivision && <Error error={errDivision} />; }
    console.log(dataDivision);
    const getDivision = dataDivision && dataDivision.division
    const { subDivision } = { ...getDivision }
    console.log(subDivision);
    const getSubDivOptions = subDivision && subDivision.map(item => ({ value: item.id, label: item.subDivName }))


    const [createTown, { loading, error }] = useMutation(createTownMutation, {
        refetchQueries: ["getAllTownsQuery"]
    })
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createTown({
                    variables: {
                        ...values,
                        subDiv: values.subDiv && getObjectFromID(values.subDiv.value)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ values, setFieldValue, isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4>Nouvelle Ville</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="regionID"  placeholder={"La Région"} options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="divisionID"  placeholder={"Le Département"} options={getDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={(value) => (setFieldValue('subDiv', value))} name="subDiv"  placeholder="L'Arrondissement" options={getSubDivOptions} disabled={isSubmitting} />
                                        <SygexInput name="townName" type="text" label=" de la ville" disabled={isSubmitting} />
                                        <SygexInput name="townCode" type="text" label="Code de la ville" disabled={isSubmitting} />


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

    );
}
export default CreateTownHook;