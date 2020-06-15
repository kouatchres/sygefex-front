
import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MiniStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import useForm from '../utils/useForm'
import Router from 'next/router';
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { updateCandidateMutation } from '../queries&Mutations&Functions/Mutations';
import { singleCandidateQuery, getAllGendersQuery } from '../queries&Mutations&Functions/Queries';


const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    min-width:12rem;
   
`;

const TwoGroups = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap:0.09rem;
   
`;

const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;

`;

const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	/* margin-top: 1rem; */
	img {
		margin:1rem auto;
		height: 15rem;
		width: 15rem;
		border-radius: 0.5rem;
		background-size: contain;
		background-position: center;
	}
`;

const NewUpdateCandidate = (props) => {

    const [state, setState] = useForm({
        birthCertNumber: "",
        cand2ndName: "",
        dateOfBirth: "",
        cand1stName: "",
        cand3rdName: "",
        email: "",
        image: "",
        phoneNumb: "",
        placeOfBirth: "",
        momName: "",
        dadName: "",
        gender: "",
    });

    const uploadFile = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'ineximages');
        const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        console.log(file);
        setState({ ...state, image: file.secure_url });
    };

    const { data: dataGender, loading: loadingGen, error: errorGen } = useQuery(getAllGendersQuery)
    { loadingGen && <p>Loading...</p>; }
    { errorGen && <Error error={errorGen} />; }
    const getGenders = dataGender && dataGender.genders
    const getGenderOptions = getGenders && getGenders.map((item) => (
        { value: item.id, label: item.genderName }))
    console.log(props);

    const { data: dataCand, loading: loadingCand, error: errorCand } = useQuery(singleCandidateQuery, { variables: { id: props.id } })
    { loadingCand && <p>Loading...</p>; }
    { errorCand && <Error error={errorCand} />; }
    const getCandidate = dataCand && dataCand.candidate;
    const candInfo = { ...getCandidate }
    console.log(getCandidate && getCandidate.cand1stName);
    console.log(getCandidate && candInfo.cand2ndName);
    const {
        birthCertNumber,
        cand2ndName,
        dateOfBirth,
        cand1stName,
        cand3rdName,
        email,
        image,
        phoneNumb,
        placeOfBirth,
        momName,
        dadName,
        gender,

    } = candInfo;


    const initialValues = {
        cand1stName: cand1stName,
        cand2ndName: cand2ndName,
        cand3rdName: cand3rdName,
        momName: momName,
        dadName: dadName,
        email: email,
        image: image,
        phoneNumb: phoneNumb,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth,
        birthCertNumber: birthCertNumber,
        gender: gender,

    }


    const [updateCandidate, { errorMut }] = useMutation(updateCandidateMutation)
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await updateCandidate({
                    variables: {
                        ...values,
                        image: state.image,
                        gender: { id: gender.id },
                        id: props.id
                    },
                });
                Router.push({
                    pathname: '/show/singleCand',
                    query: {
                        id: props.id
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 200);
            }}

        >
            {({ values, setFieldValue, isSubmitting }) => (
                <MiniStyledPage>
                    <h4>Correction Info Candidat</h4>
                    <Error error={errorMut} />
                    <StyledForm disabled={loadingGen} aria-busy={loadingGen} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygexInput name="file" type="file" onChange={uploadFile} />
                                        <SygefexSelect onChange={(value) => (values => setFieldValue('gender', value))} options={getGenderOptions} name="gender" disabled={isSubmitting} placeholder={"Votre Sexe"} />
                                        <SygexInput
                                            id="centerName"
                                            name="cand1stName"
                                            type="text"
                                            label="Nom"
                                        />
                                        <SygexInput
                                            id="cand2ndName"
                                            name="cand2ndName"
                                            type="text"
                                            label="Prénom"
                                        />
                                        <SygexInput
                                            name="cand3rdName"
                                            id="cand3rdName"
                                            type="text"
                                            label="Autres Noms"
                                        />
                                        <SygexInput
                                            name="placeOfBirth"
                                            id="placeOfBirth"
                                            type="text"
                                            label="Lieu de Naissance"
                                        />
                                        <SygexInput
                                            name="dadName"
                                            id="dadName"
                                            type="text"
                                            label="Noms du pere"
                                        />
                                        <SygexInput
                                            name="momName"
                                            id="momName"
                                            type="text"
                                            label="Noms de la mere"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <SygexInput
                                            name="dateOfBirth"
                                            id="dateOfBirth"
                                            format="d MMM yyyy"
                                            type="date"
                                            label="Date de Naissance"
                                        />
                                        <SygexInput
                                            name="birthCertNumber"
                                            id="birthCertNumber"
                                            type="text"
                                            label="Numéro l'Acte de Naissance"
                                        />
                                        <SygexInput
                                            name="phoneNumb"
                                            id="phoneNumb"
                                            type="number"
                                            label="Numéro de portable"
                                        />
                                        <SygexInput
                                            name="email"
                                            id="email"
                                            type="email"
                                            label="Email"
                                        />
                                        <PicFrame>{state.image
                                            ? (<img src={state.image} alt="Image candidat " />)
                                            : (<img src={values.image} alt="Image candidat " />)}</PicFrame>
                                    </InputGroup>
                                </TwoGroups>
                                <ButtonStyled>
                                    <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                                </ButtonStyled>
                            </AllControls>
                        </Form>
                    </StyledForm>
                </MiniStyledPage>
            )}
        </Formik>



    );
}
export default NewUpdateCandidate;