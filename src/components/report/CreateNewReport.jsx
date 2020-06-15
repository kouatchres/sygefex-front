import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import { Formik, Form } from 'formik';
import { SygexInput, SygexSelect, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import Error from '../ErrorMessage'
import * as Yup from 'yup';
import { createNewReportMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery,
    getCESExaminerQuery,
} from '../queries&Mutations&Functions/Queries';


const InputGroup = styled.div`
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	margin-bottom: 1rem;
	img {
        margin:0 auto;
		height: 15rem;
		width: 15rem;
		border-radius: 15px;
		background-size: contain;
		background-position: center;
	}
`;

const validationSchema = Yup.object().shape({
    reportName: Yup
        .string()
        .required('Nom de rapport obligatoire'),
    examID: Yup
        .string()
        .required("Choix De l'examen Obligatoire"),
    sessionID: Yup
        .string()
        .required("Choix de la session Obligatoire"),

    examinerCode: Yup
        .string()
        .required("Code secret examinateur Obligatoire"),
    centerNumber: Yup
        .number()
        .min(0, 'Pas de note négative')
        .required('No du centre obligatoire'),
});

class CreateNewReport extends Component {
    initialValues = {
        reportName: "",
        reportImage: "",
        centerExamSessionExaminer: "",
        examID: "",
        sessionID: "",
        centerNumber: "",
        examinerCode: ""
    };

    state = {
        image: "",
        examID: "",
        sessionID: "",
        centerNumber: "",
        examinerCode: ""
    };


    makeExaminerObject = (profCodeValue) => {
        const storedProf = {
            examinerCode: `${profCodeValue}`
        };
        return storedProf;
    };

    transformCenterExamSessionExaminer = authCodeValue => {
        const centerAdminObj = {
            authCode: `${authCodeValue}`
        };
        console.log(centerAdminObj);
        return centerAdminObj;
    };
    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        this.setState({ [name]: val });
    };

    uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "ineximages");
        const res = await fetch("https://api.cloudinary.com/v1_1/inex/image/upload", {
            method: "POST",
            body: data
        });
        const file = await res.json();
        console.log(file);
        this.setState({
            image: file.secure_url
        });
    };


    render() {
        const {
            image,
            centerNumber,
            sessionID,
            examID,
            examinerCode,
        } = this.state

        this.initialValues.reportImage = image
        this.initialValues.centerNumber = centerNumber
        this.initialValues.examID = examID
        this.initialValues.sessionID = sessionID
        this.initialValues.examinerCode = examinerCode



        return (
            <Query query={getAllExamsQuery}>
                {({ data, loading, error }) => {
                    {
                        loading && <p>loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }

                    const { exams } = data;
                    console.log(exams);
                    const refinedExams = exams && removeTypename(exams);
                    const getExamsOptions = exams && exams.map((item) => ({ value: item.id, label: item.examName })

                    ))
                    return (
                <Query query={getAllSessionsQuery}>
                    {({ data, loading, error }) => {
                        {
                            loading && <p> loading...</p>;
                        }
                        {
                            error && <Error error={error} />;
                        }

                        const { sessions } = data;
                        const refinedSessions = sessions && removeTypename(sessions);
                        const sessionsOptions = sessions && sessions.map((item) => ({ value: item.id, label: item.sessionName }))

                        return (

                            <Query query={getExamSessionQuery}
                                variables={{

                                    exam: refinedExams && getSelectedObject(refinedExams, examID),
                                    session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                }}

                            >
                                {({ data, error, loading }) => {
                                    console.log(data)
                                    const { examSessions } = { ...data }
                                    const refinedES = examSessions && removeTypename(examSessions)
                                    const reducedES = refinedES && refinedES[0]
                                    console.log(reducedES)

                                    return (
                                        <Query query={getSingleCenterQuery}
                                            variables={{ centerNumber: centerNumber }}
                                        >
                                            {({ data, error, loading }) => {
                                                { loading && <p>...Loading</p> }
                                                { error && <Error error={error} /> }
                                                const { centerByNumber } = { ...data }
                                                console.log(centerByNumber)
                                                centerByNumber && removeTypename(centerByNumber)
                                                console.log(centerByNumber)
                                                return (
                                                    <Query
                                                        query={getSingleCenterExamSessionQuery}
                                                        variables={{
                                                            examSession: reducedES && reducedES,
                                                            center: centerByNumber && centerByNumber
                                                        }}

                                                    >
                                                        {({ data, error, loading }) => {
                                                            { loading && <p>...Loading</p> }
                                                            { error && <Error error={error} /> }
                                                            console.log(data);
                                                            const { centerExamSessionsByCode } = { ...data };
                                                            console.log(centerExamSessionsByCode);
                                                            // remove typename from the object
                                                            const refinedCenterExamSessions =
                                                                centerExamSessionsByCode && removeTypename(centerExamSessionsByCode);
                                                            // transform the array into a single object
                                                            const getCESObj = refinedCenterExamSessions && refinedCenterExamSessions[0]
                                                            console.log(getCESObj);
                                                            return (
                                                                <Query query={getCESExaminerQuery}
                                                                    variables={{
                                                                        centerExamSession: getCESObj && getCESObj,
                                                                        examiner: this.makeExaminerObject(examinerCode),
                                                                    }}
                                                                >
                                                                    {({ data, loading, error }) => {
                                                                        const { getCenterExamSessionExaminers } = { ...data }
                                                                        console.log(getCenterExamSessionExaminers)
                                                                        const getCESExaminer =
                                                                            getCenterExamSessionExaminers && removeTypename(getCenterExamSessionExaminers)
                                                                        const reducedCESExaminer = getCESExaminer && getCESExaminer[0]
                                                                        console.log(reducedCESExaminer)

                                                                        return (

                                                                            <Mutation mutation={createNewReportMutation} >
                                                                                {(createRegion, { loading, error }) => (
                                                                                    <Formik
                                                                                        initialValues={this.initialValues}
                                                                                        validationSchema={validationSchema}
                                                                                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                                            const res = await createRegion({
                                                                                                variables: {
                                                                                                    ...values,
                                                                                                    reportImage: image,
                                                                                                    centerExamSessionExaminer: reducedCESExaminer && reducedCESExaminer
                                                                                                }
                                                                                            })
                                                                                            setTimeout(() => {
                                                                                                console.log(JSON.stringify(values, null, 2));
                                                                                                console.log(res)
                                                                                                actions.resetForm(true);
                                                                                                actions.setSubmitting(false);
                                                                                            }, 200);
                                                                                        }}

                                                                                    >
                                                                                        <MinimStyledPage>
                                                                                            <h4>Nouveau Rapport</h4>
                                                                                            <Error error={error} />
                                                                                            <StyledForm disabled={loading} aria-busy={loading} >
                                                                                                <Form>
                                                                                                    <AllControls>
                                                                                                        <InputGroup>
                                                                                                            <SygexInput

                                                                                                                value={centerByNumber && centerByNumber.centerCode}
                                                                                                                name="centerName"
                                                                                                                type="text"
                                                                                                                label=" Nom du centre" />
                                                                                                            <SygexInput name="file" type="file" onChange={this.uploadFile} />
                                                                                                            <SygexInput
                                                                                                                onChange={this.handleChange}
                                                                                                                name="centerNumber"
                                                                                                                type="number"
                                                                                                                label="no du centre" />

                                                                                                            <SygexSelect
                                                                                                                onChange={this.handleChange}
                                                                                                                name="sessionID"
                                                                                                            >
                                                                                                                <option>Session de l'examen</option>
                                                                                                                {sessionsOptions}
                                                                                                            </SygexSelect>
                                                                                                            <SygexSelect
                                                                                                                onChange={this.handleChange}
                                                                                                                name="examID"
                                                                                                            >
                                                                                                                <option>L'Examen Surveillé</option>
                                                                                                                {examsOptions}
                                                                                                            </SygexSelect>

                                                                                                            <SygexInput name="reportName" type="text" label="Nom du Rapport" />
                                                                                                            <SygexInput onChange={this.handleChange} name="examinerCode" type="text" label="Code Secret de l'examinateur" />
                                                                                                            <PicFrame> {image && <img src={image} alt={image} />}</PicFrame>
                                                                                                        </InputGroup>
                                                                                                        <ButtonStyled>
                                                                                                            <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                                                                                        </ButtonStyled>
                                                                                                    </AllControls>
                                                                                                </Form>
                                                                                            </StyledForm>
                                                                                        </MinimStyledPage>
                                                                                    </Formik>
                                                                                )}
                                                                            </Mutation>
                                                                        );
                                                                    }}
                                                                </Query>
                                                            );
                                                        }}
                                                    </Query>
                                                );
                                            }}
                                        </Query>
                                    );
                                }}
                            </Query>
                        );
                    }}
                </Query>
        );
    }
}
            </Query >

        );
    }
}
export default CreateNewReport;