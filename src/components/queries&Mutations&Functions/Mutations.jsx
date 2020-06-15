import gql from 'graphql-tag'

//************create mutations  */
const signInCandidate = gql`
  mutation signInCandidate($candCode: String!) {
    candidateSignIn(candCode: $candCode) {
      id
      cand1stName
    }
  }
`
//

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
`

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
`
const updateSubjectTypeMutation = gql`
  mutation updateSubjectTypeMutation(
    $id: ID!
    $subjectTypeName: String
    $subjectTypeCode: String
  ) {
    updateSubjectType(
      id: $id
      subjectTypeName: $subjectTypeName
      subjectTypeCode: $subjectTypeCode
    ) {
      id
      subjectTypeName
      subjectTypeCode
    }
  }
`

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
`

const updateRankMutation = gql`
  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {
    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
      rankCode
    }
  }
`

const updateSeriesMutation = gql`
  mutation updateSeriesMutation(
    $id: ID!
    $seriesName: String
    $seriesCode: String
  ) {
    updateSeries(id: $id, seriesName: $seriesName, seriesCode: $seriesCode) {
      seriesName
      seriesCode
      id
    }
  }
`

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
`

const updateRegionMutation = gql`
  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {
    updateRegion(id: $id, regName: $regName, regCode: $regCode) {
      id
      regName
      regCode
    }
  }
`

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
`

const createNewGenderMutation = gql`
  mutation createNewGenderMutation($genderName: String!, $genderCode: String!) {
    createGender(genderName: $genderName, genderCode: $genderCode) {
      id
      genderCode
      genderName
    }
  }
`

const createRegistrationMutation = gql`
  mutation createRegistrationMutation(
    $candidate: CandidateWhereUniqueInput!
    $candExamSecretCode: String!
    $candExamSession: String!
    $candRegistrationNumber: String!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $centerExamSessionSeries: CenterExamSessionSeriesWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    createRegistration(
      candidate: $candidate
      candExamSecretCode: $candExamSecretCode
      candExamSession: $candExamSession
      candRegistrationNumber: $candRegistrationNumber
      centerExamSession: $centerExamSession
      centerExamSessionSeries: $centerExamSessionSeries
      series: $series
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
`

const createCenterExamSessionMutation = gql`
  mutation createCenterExamSessionMutation(
    $examSession: ExamSessionWhereUniqueInput!
    $center: CenterWhereUniqueInput!
  ) {
    createCenterExamSession(examSession: $examSession, center: $center) {
      id
    }
  }
`

const createPhaseRankMutation = gql`
  mutation createPhaseRankMutation(
    $phase: PhaseWhereUniqueInput!
    $rankName:  String!                                                                                                                                                                    
    $rankCode:  String!                                                                                                                                                                   
  ) {
    createPhaseRank(phase: $phase, rankName : $rankName, rankCode: $rankCode ){                                                                                                                                                                      
      id
    }
  }
`

const createCenterExamSessionExaminerMutation = gql`
  mutation createCenterExamSessionExaminerMutation(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $examiner:  ExaminerWhereUniqueInput! 
    $phaseRank:  PhaseRankWhereUniqueInput! 
  ) {
    createCenterExamSessionExaminer(
    phaseRank: $phaseRank,
    centerExamSession: $centerExamSession,
    examiner: $examiner
    ){                                                                                                                                                                      
      id
    }
  }
`

const createCenterExamSessionSeriesMutation = gql`
  mutation createCenterExamSessionSeriesMutation(
    $series: SeriesWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    createCenterExamSessionSeries(
      series: $series
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`


// const createCenterExamSessionexaminerorityMutation = gql`
//   mutation createCenterExamSessionexaminerorityMutation(
//     $rank: RankWhereUniqueInput!
//     $centerExamSession: CenterExamSessionWhereUniqueInput!
//     $examinerName: String!
//     $examinerCode: String!
//     $examinerCNI: String!
//     $examinerPhone: Int!
//     $examinerMatricule: String!
//   ) {
//     createCenterExamSessionexaminerority(
//       rank: $rank
//       centerExamSession: $centerExamSession
//       examinerCNI: $examinerCNI
//       examinerName: $examinerName
//       examinerCode: $examinerCode
//       examinerPhone: $examinerPhone
//       examinerMatricule: $examinerMatricule
//     ) {
//       examinerName
//       examinerCode
//       examinerPhone
//     }
//   }
// `

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
`

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
`

const createSeriesMutation = gql`
  mutation createSeriesMutation(
    $seriesName: String!
    $seriesCode: String!
    $educationType: EducationTypeWhereUniqueInput!
  ) {
    createSeries(
      seriesName: $seriesName
      seriesCode: $seriesCode
      educationType: $educationType
    ) {
      id
      seriesName
    }
  }
`
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
`

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
`

const createNewSubjectTypeMutation = gql`
  mutation createNewSubjectTypeMutation(
    $subjectTypeName: String!
    $subjectTypeCode: String!
  ) {
    createSubjectType(
      subjectTypeName: $subjectTypeName
      subjectTypeCode: $subjectTypeCode
    ) {
      id
      subjectTypeName
    }
  }
`

const createNewSubjectMutation = gql`
  mutation createNewSubjectMutation(
    $subjectName: String!
    $subjectCode: String!
    $subjectType: SubjectTypeWhereUniqueInput!
    $educType: EducationTypeWhereUniqueInput!
  ) {
    createSubject(
      subjectName: $subjectName
      educType: $educType
      subjectCode: $subjectCode
      subjectType: $subjectType
    ) {
      subjectCode
      subjectName
    }
  }
`

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
`

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
`

const createNewRankMutation = gql`
  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {
    createRank(rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
    }
  }
`;

const createNewRegionMutation = gql`
  mutation createNewRegionMutation(
    $regName: String!
     $regCode: String!
      $country: CountryWhereUniqueInput!
      ) {
    createRegion(
       country: $country 
        regName: $regName
         regCode: $regCode
         ) {
      id
      regName
    }
  }
`

const signupUserMutation = gql`
  mutation signupUserMutation(
    $name: String!
     $email: String!
      $password: String!
      ) {
  createUser(
       password: $password 
        name: $name
         email: $email
         ) {
      id
      name
      email
    }
  }
`

const loginUserMutation = gql`
  mutation loginUserMutation(
     $email: String!
      $password: String!
      ) {
    login(
       password: $password 
         email: $email
         ) {
      id
      email
    }
  }
`

const createNewCountryMutation = gql`
  mutation createNewCountryMutation($countryName: String!, $countryCode: String!) {
    createCountry(countryName: $countryName, countryCode: $countryCode) {
      id
      countryName
      countryCode
    }
  }
`

const createPhaseMutation = gql`
  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!){
    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {
      id
      phaseName
    }
  }
`

const createExamMutation = gql`
  mutation createExamMutation($examName: String!, $examCode: String!) {
    createExam(examName: $examName, examCode: $examCode) {
      id
      examName
    }
  }
`

const registerSubjectSeriesMutation = gql`
  mutation registerSubjectSeriesMutation(
    $subject: SubjectWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSeries(subject: $subject, series: $series, coeff: $coeff) {
      id
      series {
        id
        seriesName
        subjectSeries {
          id
          subject {
            id
            subjectName
          }
        }
      }
    }
  }
`

const registerNewSubjectSeriesMutation = gql`
  mutation registerNewSubjectSeriesMutation(
    $series: SeriesWhereUniqueInput!
    $coeff: Int!
    $subjectName: String!
    $subjectCode: String!
  ) {
    createSubjectSeries(
      subjectCode: $subjectCode
      subjectName: $subjectName
      series: $series
      coeff: $coeff
    ) {
      id
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
          subjectCode
        }
      }
    }
  }
`

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
    $gender: GenderWhereUniqueInput!
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
`

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
    $gender: GenderWhereUniqueInput!
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
`

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
`

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
`

const updateTownMutation = gql`
  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {
    updateTown(id: $id, townName: $townName, townCode: $townCode) {
      townName
      townCode
      id
    }
  }
`

const updateExamMutation = gql`
  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {
    updateExam(id: $id, examName: $examName, examCode: $examCode) {
      examName
      examCode
      id
    }
  }
`

const updateScoreMutation = gql`
  mutation updateScoreMutation(
    $subjectSeries: SubjectSeriesWhereUniqueInput!
    $subjectAve: Float!
    $candExamSecretCode: String!
  ) {
    updateScore(
      subjectSeries: $subjectSeries
      subjectAve: $subjectAve
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      id
      subjectSeries {
        id
        subjectCode
        subjectName
      }
    }
  }
`

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
    $gender: GenderWhereUniqueInput
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
      gender {
        id
      }
    }
  }
`

const updateGenderMutation = gql`
  mutation updateGenderMutation(
    $id: ID!
    $genderName: String
    $genderCode: String
  ) {
    updateGender(id: $id, genderName: $genderName, genderCode: $genderCode) {
      id
      genderName
      genderCode
    }
  }
`

const signUpMutation = gql`
  mutation signUpMutation($email: String!, $name: String!, $password: String!) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      resetToken
      password
    }
  }
`

const updateItemMutation = async (e, updateMutation) => {
  e.preventDefault()
  console.log('Updating Region!!')
  const res = await updateMutation({
    variables: {
      id: this.props.id,
      ...this.state,
    },
  })
  console.log('Region Updated!!')
}

////**************Update mutations */

export {
  createCandidateMutation,
  createNewSubjectMutation,
  createNewSubjectTypeMutation,
  createTownMutation,
  createCenterExamSessionExaminerMutation,
  createDivisionMutation,
  createRegistrationMutation,
  createCenterMutation,
  createEducationTypeMutation,
  createSeriesMutation,
  createSubDivisionMutation,
  createNewSessionMutation,
  createNewRankMutation,
  createNewReportMutation,
  createNewRegionMutation,
  createNewGenderMutation,
  createExamMutation,
  registerSubjectSeriesMutation,
  registerNewSubjectSeriesMutation,
  updateCenterMutation,
  updateTownMutation,
  updateSessionMutation,
  updateRegionMutation,
  updateExamMutation,
  updateSubDivisionMutation,
  updateGenderMutation,
  updateCandidateMutation,
  updateScoreMutation,
  updateDivisionMutation,
  updateItemMutation,
  createExaminerMutation,
  createPhaseMutation,
  createCenterExamSessionSeriesMutation,
  updateSeriesMutation,
  updateRankMutation,
  createPhaseRankMutation,
  createNewCountryMutation,
  signUpMutation,
  updateSubjectMutation,
  updateSubjectTypeMutation,
  createCenterExamSessionMutation,
  updateEducationTypeMutation,
  signInCandidate,
  loginUserMutation,
  signupUserMutation,
}
