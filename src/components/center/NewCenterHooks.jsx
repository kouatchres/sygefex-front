
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton, SygefexSelect } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, uniqueCodeGen } from "../queries&Mutations&Functions/Functions";

import {
    getAllCountrysQuery,
    getAllCentersQuery,
    getAllRegionsOfACountryQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getTownsOfASubDivisionQuery
} from "../queries&Mutations&Functions/Queries";


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
        centerName: Yup
            .string()
            .required("Nom du Centre Obligatoire"),
        centerCode: Yup
            .string()
            .required("Code centre Obligatoire"),
        centerNumber: Yup
            .number()
            .min(1, "Numéro centre du doit etre Positif")
            .required("Numéro centre Obligatoire"),
    });

const NewCenterHooks = () => {
    const initialValues = {
        centerName: "",
        centerCode: "",
        town: ""
    }
    const [state, setState, handleReactSelectChange] = useForm({ regionID: "", divisionID: "", subDivID: "" })

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

    const { data: dataSubDivision, loading: loadingSubDivision, error: errSubDivision } = useQuery(getTownsOfASubDivisionQuery, {
        skip: !state.subDivID,
        variables: { id: state.subDivID }
    })
    { loadingSubDivision && <p>loading...</p>; }
    { errSubDivision && <Error error={errSubDivision} />; }
    console.log(dataSubDivision);
    const getSubDivision = dataSubDivision && dataSubDivision.subDivision
    const { town } = { ...getSubDivision }
    console.log(town);
    const getTownOptions = town && town.map(item => ({ value: item.id, label: item.townName }))

    const [createCenter, { loading, error }] = useMutation(createCenterMutation, {
        refetchQueries: ["getAllCentersQuery"]
    })
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createCenter({
                    variables: {
                        ...values,
                        centerSecretCode: uniqueCodeGen(18),
                        town: values.town && getObjectFromID(values.town.value)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 200);
            }}>
            {({ values, setFieldValue, isSubmitting }) => {
                return (

                    <MinimStyledPage>
                        <h4>Nouveau Centre</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="regionID" placeholder={"La Région"} options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="divisionID" placeholder={"Le Département"} options={getDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="subDivID" placeholder={"L'Arrondissement"} options={getSubDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={(value) => (setFieldValue('town', value))} name="town" placeholder="La Ville" options={getTownOptions} disabled={isSubmitting} />
                                        <SygexInput name="centerName" type="text" label="Libéllé du centre" disabled={isSubmitting} />
                                        <SygexInput name="centerCode" type="text" label="Nom Abbregé du centre" disabled={isSubmitting} />
                                        <SygexInput name="centerNumber" type="number" label="Code Numérique du centre" disabled={isSubmitting} />
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
export default NewCenterHooks;