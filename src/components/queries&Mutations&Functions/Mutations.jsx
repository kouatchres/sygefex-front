import gql from "graphql-tag";

//************create mutations  */
const signInCandidate = gql`
  mutation signInCandidate($candCode: String!) {
    candidateSignIn(candCode: $candCode) {
      id
      cand1stName
    }
  }
`;
//
const signoutMutation = gql`
  mutation signoutMutation {
    signout {
      message
    }
  }
`;

const deleteReportMutation = gql`
  mutation deleteReportMutation($id: ID!) {
    deleteReport(id: $id) {
      id
    }
  }
`;

const updateSessionMutation = gql`
  mutation updateSessionMutation(
    $id: ID!
    $sessionName: String
    $sessionCode: String
  ) {
    updateSession(
      id: $id
      sessionName: $sessionName
      sessionCode: $sessionCode
    ) {
      sessionName
      sessionCode
      id
    }
  }
`;

const updateEducationTypeMutation = gql`
  mutation updateEducationTypeMutation(
    $id: ID!
    $educationTypeName: String
    $educationTypeCode: String
  ) {
    updateEducationType(
      id: $id
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const updateSubjectMutation = gql`
  mutation updateSubjectMutation(
    $id: ID!
    $subjectName: String
    $subjectCode: String
  ) {
    updateSubject(
      id: $id
      subjectName: $subjectName
      subjectCode: $subjectCode
    ) {
      subjectName
      subjectCode
      id
    }
  }
`;

const updateRankMutation = gql`
  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {
    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
      rankCode
    }
  }
`;

const updateSpecialtyMutation = gql`
  mutation updateSpecialtyMutation(
    $id: ID!
    $specialtyName: String
    $specialtyCode: String
  ) {
    updateSpecialty(
      id: $id
      specialtyName: $specialtyName
      specialtyCode: $specialtyCode
    ) {
      specialtyName
      specialtyCode
      id
    }
  }
`;

const updateDivisionMutation = gql`
  mutation updateDivisionMutation(
    $id: ID!
    $divName: String
    $divCode: String
  ) {
    updateDivision(id: $id, divName: $divName, divCode: $divCode) {
      id
      divName
      divCode
    }
  }
`;

const updateRegionMutation = gql`
  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {
    updateRegion(id: $id, regName: $regName, regCode: $regCode) {
      id
      regName
      regCode
    }
  }
`;

const createNewReportMutation = gql`
  mutation createNewReportMutation(
    $reportImage: String!
    $reportName: String!
    $centerExamSessionExaminer: CenterExamSessionExaminerWhereUniqueInput!
  ) {
    createReport(
      reportImage: $reportImage
      reportName: $reportName
      centerExamSessionExaminer: $centerExamSessionExaminer
    ) {
      id
      reportName
      reportImage
    }
  }
`;

const createRegistrationMutation = gql`
  mutation createRegistrationMutation(
    $candidate: CandidateWhereUniqueInput!
    $candExamSecretCode: String!
    $candExamSession: String!
    $candRegistrationNumber: String!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
    $aptitude: String!
    $EPF1: String!
    $EPF2: String!
  ) {
    createRegistration(
      candidate: $candidate
      candExamSecretCode: $candExamSecretCode
      candExamSession: $candExamSession
      candRegistrationNumber: $candRegistrationNumber
      centerExamSession: $centerExamSession
      centerExamSessionSpecialty: $centerExamSessionSpecialty
      specialty: $specialty
      EPF1: $EPF1
      EPF2: $EPF2
      aptitude: $aptitude
    ) {
      id
      centerExamSession {
        id
        center {
          id
          centerName
        }
      }
      candidate {
        id
        cand1stName
      }
    }
  }
`;

const createCenterExamSessionMutation = gql`
  mutation createCenterExamSessionMutation(
    $examSession: ExamSessionWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $CESCode: String!
  ) {
    createCenterExamSession(
      examSession: $examSession
      center: $center
      CESCode: $CESCode
    ) {
      id
    }
  }
`;

const createPhaseRankMutation = gql`
  mutation createPhaseRankMutation(
    $phase: PhaseWhereUniqueInput!
    $rank: RankWhereUniqueInput!
  ) {
    createPhaseRank(phase: $phase, rank: $rank) {
      id
    }
  }
`;

const createCenterExamSessionExaminerMutation = gql`
  mutation createCenterExamSessionExaminerMutation(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $examiner: ExaminerWhereUniqueInput!
    $phaseRank: PhaseRankWhereUniqueInput!
  ) {
    createCenterExamSessionExaminer(
      phaseRank: $phaseRank
      centerExamSession: $centerExamSession
      examiner: $examiner
    ) {
      id
    }
  }
`;

const createCenterExamSessionSpecialtyMutation = gql`
  mutation createCenterExamSessionSpecialtyMutation(
    $specialty: SpecialtyWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    createCenterExamSessionSpecialty(
      specialty: $specialty
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`;

const createDivisionMutation = gql`
  mutation createDivisionMutation(
    $divName: String!
    $divCode: String!
    $region: RegionWhereUniqueInput!
  ) {
    createDivision(divName: $divName, divCode: $divCode, region: $region) {
      id
      divName
    }
  }
`;

const createCenterMutation = gql`
  mutation createCenterMutation(
    $centerName: String!
    $centerNumber: Int
    $centerCode: String!
    $centerSecretCode: String!
    $town: TownWhereUniqueInput!
  ) {
    createCenter(
      centerSecretCode: $centerSecretCode
      centerName: $centerName
      centerNumber: $centerNumber
      centerCode: $centerCode
      town: $town
    ) {
      id
      centerName
      centerSecretCode
      centerCode
      town {
        townName
      }
    }
  }
`;

const createSpecialtyMutation = gql`
  mutation createSpecialtyMutation(
    $specialtyName: String!
    $specialtyCode: String!
    $educationType: EducationTypeWhereUniqueInput!
  ) {
    createSpecialty(
      specialtyName: $specialtyName
      specialtyCode: $specialtyCode
      educationType: $educationType
    ) {
      id
      specialtyName
    }
  }
`;
const createEducationTypeMutation = gql`
  mutation createEducationTypeMutation(
    $educationTypeName: String!
    $educationTypeCode: String!
  ) {
    createEducationType(
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
    }
  }
`;

const createTownMutation = gql`
  mutation createTownMutation(
    $townName: String!
    $townCode: String!
    $subDiv: SubDivisionWhereUniqueInput!
  ) {
    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {
      id
      townName
      townCode
      subDiv {
        subDivName
      }
    }
  }
`;

const createNewSubjectMutation = gql`
  mutation createNewSubjectMutation(
    $subjectName: String!
    $subjectCode: String!
    $subjectType: String!
    $subjectGroup: String!
    $educType: EducationTypeWhereUniqueInput!
  ) {
    createSubject(
      subjectName: $subjectName
      educType: $educType
      subjectCode: $subjectCode
      subjectType: $subjectType
      subjectGroup: $subjectGroup
    ) {
      subjectCode
      subjectName
      subjectType
      subjectGroup
    }
  }
`;

const createSubDivisionMutation = gql`
  mutation createSubDivisionMutation(
    $subDivName: String!
    $subDivCode: String!
    $division: DivisionWhereUniqueInput!
  ) {
    createSubDivision(
      subDivName: $subDivName
      subDivCode: $subDivCode
      division: $division
    ) {
      id
      subDivName
      subDivCode
      division {
        divName
      }
    }
  }
`;

const createNewSessionMutation = gql`
  mutation createNewSessionMutation(
    $sessionName: String!
    $sessionCode: String!
  ) {
    createSession(sessionName: $sessionName, sessionCode: $sessionCode) {
      id
      sessionName
    }
  }
`;

const createNewRankMutation = gql`
  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {
    createRank(rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
    }
  }
`;

const createNewRegionMutation = gql`
  mutation createNewRegionMutation($regName: String!, $regCode: String!) {
    createRegion(regName: $regName, regCode: $regCode) {
      id
      regName
    }
  }
`;

const signupUserMutation = gql`
  mutation signupUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(password: $password, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const loginUserMutation = gql`
  mutation loginUserMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;

const requestResetMutation = gql`
  mutation requestResetMutation($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const createNewCountryMutation = gql`
  mutation createNewCountryMutation(
    $countryName: String!
    $countryCode: String!
  ) {
    createCountry(countryName: $countryName, countryCode: $countryCode) {
      id
      countryName
      countryCode
    }
  }
`;

const createPhaseMutation = gql`
  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!) {
    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {
      id
      phaseName
    }
  }
`;

const createAttendanceMutation = gql`
  mutation createAttendanceMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!
    $collected: String!
    $candExamSecretCode: String!
    $handin: String!
  ) {
    createAttendance(
      subjectSpecialty: $subjectSpecialty
      centerExamSessionSpecialty: $centerExamSessionSpecialty
      collected: $collected
      candExamSecretCode: $candExamSecretCode
      handin: $handin
    ) {
      id
    }
  }
`;

const createExamMutation = gql`
  mutation createExamMutation($examName: String!, $examCode: String!) {
    createExam(examName: $examName, examCode: $examCode) {
      id
      examName
    }
  }
`;

const registerSubjectSpecialtyMutation = gql`
  mutation registerSubjectSpecialtyMutation(
    $subject: SubjectWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSpecialty(
      subject: $subject
      specialty: $specialty
      coeff: $coeff
    ) {
      id
      specialty {
        id
        specialtyName
        subjectSpecialty {
          id
          subject {
            id
            subjectName
          }
        }
      }
    }
  }
`;

const registerNewSubjectSpecialtyMutation = gql`
  mutation registerNewSubjectSpecialtyMutation(
    $specialty: SpecialtyWhereUniqueInput!
    $subject: SubjectWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSpecialty(
      specialty: $specialty
      subject: $subject
      coeff: $coeff
    ) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;

const createCandidateMutation = gql`
  mutation createCandidateMutation(
    $cand1stName: String!
    $cand2ndName: String
    $cand3rdName: String
    $dadName: String
    $momName: String
    $candCode: String
    $email: String!
    $image: String!
    $phoneNumb: Int
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $placeOfBirth: String
    $gender: String!
  ) {
    createCandidate(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      dadName: $dadName
      momName: $momName
      cand3rdName: $cand3rdName
      candCode: $candCode
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      candCode
      birthCertNumber
      dateOfBirth
      image
    }
  }
`;

const createMultipleCandidatesMutation = gql`
  mutation createMultipleCandidatesMutation(
    $cand1stName: String!
    $cand2ndName: String
    $cand3rdName: String
    $dadName: String
    $momName: String
    $candCode: String
    $email: String!
    $image: String!
    $phoneNumb: Int
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $placeOfBirth: String
    $gender: String!
  ) {
    createMultipleCandidates(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      dadName: $dadName
      momName: $momName
      cand3rdName: $cand3rdName
      candCode: $candCode
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      candCode
      gender
      birthCertNumber
      dateOfBirth
      image
    }
  }
`;

const createExaminerMutation = gql`
  mutation createExaminerMutation(
    $examiner1stName: String!
    $examiner2ndName: String!
    $examinerOtherNames: String
    $examinerCode: String!
    $examinerEmail: String!
    $examinerCNI: String!
    $examinerMatricule: String!
    $examinerImage: String!
    $examinerPhone: Int!
    $gender: String!
  ) {
    createExaminer(
      examiner1stName: $examiner1stName
      examiner2ndName: $examiner2ndName
      examinerOtherNames: $examinerOtherNames
      examinerMatricule: $examinerMatricule
      examinerCode: $examinerCode
      examinerCNI: $examinerCNI
      examinerEmail: $examinerEmail
      examinerImage: $examinerImage
      examinerPhone: $examinerPhone
      gender: $gender
    ) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
    }
  }
`;

//************create mutations  */

////**************Update mutations */

const updateSubDivisionMutation = gql`
  mutation updateSubDivisionMutation(
    $id: ID!
    $subDivName: String
    $subDivCode: String
  ) {
    updateSubDivision(
      id: $id
      subDivName: $subDivName
      subDivCode: $subDivCode
    ) {
      subDivName
      subDivCode
      id
    }
  }
`;

const updateCenterMutation = gql`
  mutation updateCenterMutation(
    $id: ID!
    $centerName: String
    $centerCode: String
    $centerNumber: Int
  ) {
    updateCenter(
      id: $id
      centerName: $centerName
      centerCode: $centerCode
      centerNumber: $centerNumber
    ) {
      id
      centerName
      centerNumber
      centerCode
    }
  }
`;

const updateTownMutation = gql`
  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {
    updateTown(id: $id, townName: $townName, townCode: $townCode) {
      townName
      townCode
      id
    }
  }
`;

const updateExamMutation = gql`
  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {
    updateExam(id: $id, examName: $examName, examCode: $examCode) {
      examName
      examCode
      id
    }
  }
`;

const updateScoreMutation = gql`
  mutation updateScoreMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $subjectAve: Float!
    $candExamSecretCode: String!
  ) {
    updateScore(
      subjectSpecialty: $subjectSpecialty
      subjectAve: $subjectAve
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      id
      subjectSpecialty {
        id
        subjectCode
        subjectName
      }
    }
  }
`;

const enterMarksMutation = gql`
  mutation enterMarksMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $subjectAve: Float!
    $subjectName: String!
    $candExamSecretCode: String!
  ) {
    enterMarks(
      subjectSpecialty: $subjectSpecialty
      subjectAve: $subjectAve
      subjectName: $subjectName
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      subjectName
      id
      subjectSpecialty {
        id
      }
    }
  }
`;

// const createUserMutation = gql`
//   mutation createUserMutation(
//     $email: String!
//     $name: String!
//     $password: String!
//     ) {
//     createUser(
//                email: $email!
//                name: $name!
//                password: $password!
//                ) {
//       id
//       name
//       email
//       password
//     }
//   }
// `

const updateCandidateMutation = gql`
  mutation updateCandidateMutation(
    $id: ID!
    $cand1stName: String
    $cand2ndName: String
    $cand3rdName: String
    $momName: String
    $dadName: String
    $email: String
    $image: String
    $phoneNumb: Int
    $placeOfBirth: String
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $gender: String
  ) {
    updateCandidate(
      id: $id
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      cand3rdName: $cand3rdName
      momName: $momName
      dadName: $dadName
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      placeOfBirth: $placeOfBirth
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      email
      image
      phoneNumb
      placeOfBirth
      dateOfBirth
      birthCertNumber
      gender
    }
  }
`;

const updateExaminerMutation = gql`
  mutation updateExaminerMutation(
    $id: ID!
    $examiner1stName: String
    $examiner2ndName: String
    $examinerOtherNames: String
    $examinerCNI: String
    $examinerPhone: Int
    $examinerEmail: String
    $examinerImage: String
    $examinerMatricule: String
    $examinerCode: String
    $gender: String
  ) {
    updateExaminer(
      id: $id
      examiner1stName: $examiner1stName
      examiner2ndName: $examiner2ndName
      examinerOtherNames: $examinerOtherNames
      examinerCNI: $examinerCNI
      examinerPhone: $examinerPhone
      examinerEmail: $examinerEmail
      examinerMatricule: $examinerMatricule
      examinerCode: $examinerCode
      examinerImage: $examinerImage
      gender: $gender
    ) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCNI
      examinerPhone
      examinerEmail
      examinerMatricule
      examinerCode
      examinerImage
      gender
    }
  }
`;

const updateSignUpMutation = gql`
  mutation updateSignUpMutation(
    $email: String!
    $name: String!
    $password: String!
  ) {
    updateUser(email: $email, name: $name, password: $password) {
      id
      email
      name
      password
    }
  }
`;

const updateItemMutation = async (e, updateMutation) => {
  e.preventDefault();
  console.log("Updating Region!!");
  const res = await updateMutation({
    variables: {
      id: this.props.id,
      ...this.state,
    },
  });
  console.log("Region Updated!!");
};

////**************Update mutations */

/////*****************Delete Mutations */

const deleteRegionMutation = gql`
  mutation deleteRegionMutation($id: ID!) {
    deleteRegion(id: $id) {
      id
    }
  }
`;

const deleteCenterMutation = gql`
  mutation deleteCenterMutation($id: ID!) {
    deleteCenter(id: $id) {
      id
    }
  }
`;

export {
  createCandidateMutation,
  createNewSubjectMutation,
  createTownMutation,
  createCenterExamSessionExaminerMutation,
  createDivisionMutation,
  createRegistrationMutation,
  createCenterMutation,
  createEducationTypeMutation,
  createSpecialtyMutation,
  createSubDivisionMutation,
  createNewSessionMutation,
  createNewRankMutation,
  createNewReportMutation,
  createNewRegionMutation,
  createExamMutation,
  registerSubjectSpecialtyMutation,
  registerNewSubjectSpecialtyMutation,
  updateCenterMutation,
  updateTownMutation,
  updateSessionMutation,
  updateRegionMutation,
  updateExamMutation,
  updateSubDivisionMutation,
  updateCandidateMutation,
  updateScoreMutation,
  updateDivisionMutation,
  updateItemMutation,
  createExaminerMutation,
  createPhaseMutation,
  createCenterExamSessionSpecialtyMutation,
  updateSpecialtyMutation,
  updateRankMutation,
  createPhaseRankMutation,
  createNewCountryMutation,
  createMultipleCandidatesMutation,
  updateSubjectMutation,
  updateExaminerMutation,
  createCenterExamSessionMutation,
  updateEducationTypeMutation,
  createAttendanceMutation,
  signInCandidate,
  loginUserMutation,
  updateSignUpMutation,
  signupUserMutation,
  deleteRegionMutation,
  deleteCenterMutation,
  signoutMutation,
  enterMarksMutation,
  deleteReportMutation,
  requestResetMutation,
};
