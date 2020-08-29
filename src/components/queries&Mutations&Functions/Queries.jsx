import gql from "graphql-tag";

const currentUserQuery = gql`
  query currentUserQuery {
    me {
      id
      email
      name
    }
  }
`;

const singleEducationTypeQuery = gql`
  query singleEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;

const getCESExaminerQuery = gql`
  query getCESExaminerQuery(
    $examiner: ExaminerWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    getCenterExamSessionExaminers(
      examiner: $examiner
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`;

const getAllEducationTypesQuery = gql`
  query getAllEducationTypesQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;

const getAllRegionsQuery = gql`
  query getAllRegionsQuery {
    regions(orderBy: regName_ASC) {
      regName
      regCode
      id
    }
  }
`;

const getAllUsersQuery = gql`
  query getAllUsersQuery {
    users(orderBy: name_ASC) {
      name
      email
      id
      password
      resetToken
    }
  }
`;

const getCenterResultsQuery = gql`
  query getCenterResultsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    getResultsPerCenter(exam: $exam, center: $center, session: $session) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        email
        user {
          id
        }
        dateOfBirth
        user {
          id
        }
        gender
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      center {
        centerName
      }
      scores {
        subjectAve
        coeff
        subjectSpecialty {
          subjectName
          specialty {
            id
            specialtyName
          }
        }
      }
    }
  }
`;

const getCandidateResultsQuery = gql`
  query getCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      createdAt
      candRegistrationNumber

      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        placeOfBirth
        image
        email
        user {
          id
        }
        dateOfBirth
        gender
      }
      centerExamSessionSpecialty {
        centerExamSession {
          id
          examSession {
            id
            exam {
              id
              examName
            }
            session {
              id
              sessionName
            }
          }
          center {
            id
            centerName
          }
        }
        specialty {
          id
          specialtyName
        }
      }
      scores {
        id
        subjectAve
        coeff
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

const getExaminerRegistrationQuery = gql`
  query getExaminerRegistrationQuery($id: ID!) {
    centerExamSessionExaminer(id: $id) {
      id
      examiner {
        examiner1stName
        examiner2ndName
        examinerOtherNames
        examinerMatricule
        examinerPhone
        examinerCNI
        examinerImage
        examinerEmail
        gender
      }
      centerExamSession {
        id
        examSession {
          id
          exam {
            id
            examName
          }
          session {
            id
            sessionName
          }
        }
        center {
          id
          centerName
        }
      }
      phaseRank {
        id
        rankName
      }
    }
  }
`;

const getAllCenterResultsQuery = gql`
  query getAllCenterResultsQuery($centerExamSession: String!) {
    centerExamSessionSpecialtyForResults(
      centerExamSession: $centerExamSession
    ) {
      id
      specialty {
        id
        specialtyName
        subjectSpecialty {
          id
          subjectName
        }
      }
      registration {
        id
        candidate {
          cand1stName
          id
        }
        scores {
          id
          subjectAve
          coeff
          subjectSpecialty {
            id
            subjectName
          }
        }
      }
    }
  }
`;

const getEachCandidateResultsQuery = gql`
  query getEachCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        email
        dateOfBirth
        user {
          id
        }
        gender
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      specialty {
        id
        specialtyName
      }
      center {
        centerName
      }
    }
  }
`;

const getCandidateRegistrationInfoQuery = gql`
  query getCandidateRegistrationInfoQuery($id: ID!) {
    registration(id: $id) {
      id
      candExamSecretCode
      createdAt
      candRegistrationNumber
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        image
        email
        candCode
        dateOfBirth
        placeOfBirth
        gender
      }
      centerExamSessionSpecialty {
        id
        specialty {
          id
          specialtyName
          subjectSpecialty {
            coeff
            subject {
              id
              subjectName
              subjectCode
            }
          }
        }
        centerExamSession {
          center {
            id
            centerName
          }
          examSession {
            id
            exam {
              id
              examName
            }
            session {
              id
              sessionName
            }
          }
        }
      }
    }
  }
`;

const getCandidateRegistrationIDQuery = gql`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(
      centerExamSession: $centerExamSession
      candidate: $candidate
    ) {
      id
    }
  }
`;

const getCandidateRegistrationIDsQuery = gql`
  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!) {
    candidateRegistrationIDs(candidate: $candidate) {
      id
    }
  }
`;

const getAllCandidateRegistrationIDsQuery = gql`
  query getAllCandidateRegistrationIDsQuery($id: ID!) {
    candidate(id: $id) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      user {
        id
      }
      gender
      registration {
        id

        centerExamSessionSpecialty {
          id
          specialty {
            id
            specialtyName
          }
          centerExamSession {
            center {
              id
              centerName
            }
            examSession {
              id
              exam {
                id
                examName
              }
              session {
                id
                sessionName
              }
            }
          }
        }
        scores {
          id
          subjectAve
          coeff
        }
      }
      id
    }
  }
`;

const getCandidateIDQuery = gql`
  query getCandidateIDQuery($candCode: String!) {
    candidateCode(candCode: $candCode) {
      id
    }
  }
`;

const getExaminerIDQuery = gql`
  query getExaminerIDQuery($examinerCode: String!) {
    examinerByCode(examinerCode: $examinerCode) {
      id
    }
  }
`;

const getRegistrationIDFromRegNumberQuery = gql`
  query getRegistrationIDFromRegNumberQuery($candRegistrationNumber: String!) {
    candidateRegistrationNumber(
      candRegistrationNumber: $candRegistrationNumber
    ) {
      id
      candidate {
        id
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        dateOfBirth
        image
        momName
        dadName
        email
        user {
          id
        }
        gender
        registration {
          id

          centerExamSessionSpecialty {
            id
            specialty {
              id
              specialtyName
            }
            centerExamSession {
              center {
                id
                centerName
              }
              examSession {
                id
                exam {
                  id
                  examName
                }
                session {
                  id
                  sessionName
                }
              }
            }
          }
          scores {
            id
            subjectAve
            coeff
            subjectSpecialty {
              id
              subjectName
            }
          }
        }
      }
    }
  }
`;

const getCenterIDFromCenterCodeQuery = gql`
  query getCenterIDFromCenterCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode: $centerSecretCode) {
      id
    }
  }
`;

const getCenterRegistrationIDsQuery = gql`
  query getCenterRegistrationIDsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {
      id
    }
  }
`;

const centerExamSessionSpecialtyForResultsQuery = gql`
  query centerExamSessionSpecialtyForResultsQuery($centerExamSession: String!) {
    centerExamSessionSpecialtyForResults(
      centerExamSession: $centerExamSession
    ) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;

const centerExamSessionForResultsQuery = gql`
  query centerExamSessionForResultsQuery($id: ID!) {
    centerExamSession(id: $id) {
      id

      registration {
        id
        centerExamSession {
          id
          center {
            id
            centerName
          }
          examSession {
            id
            exam {
              examName
              id
            }
            session {
              id
              sessionName
            }
          }
        }
        candRegistrationNumber
        candExamSecretCode
        aptitude {
          id
          aptitudeName
        }
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
          dateOfBirth
          placeOfBirth
          email
          phoneNumb
          user {
            id
          }
          gender
        }
        specialty {
          id
          specialtyName
          specialtyCode
        }
        scores {
          id
          subjectAve
        }
      }
    }
  }
`;

const centerExamSessionSpecialtyResultsQuery = gql`
  query centerExamSessionSpecialtyResultsQuery($id: ID!) {
    centerExamSessionSpecialty(id: $id) {
      id
      centerExamSession {
        id
        center {
          id
          centerName
          centerCode
        }
        examSession {
          exam {
            id
            examName
          }
          session {
            id
            sessionName
          }
        }
      }

      specialty {
        id
        specialtyName
        specialtyCode
      }
      registration {
        id
        candRegistrationNumber
        candExamSecretCode
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
          dateOfBirth
          placeOfBirth
          email
          phoneNumb
          user {
            id
          }
          gender
        }
        scores {
          id
          subjectAve
        }
      }
    }
  }
`;

const getCandidateByCandCodeQuery = gql`
  query getCandidateByCandCodeQuery($candCode: String!) {
    getCandidateByCode(candCode: $candCode) {
      id
      cand1stName
      candCode
      dateOfBirth
      placeOfBirth
      user {
        id
      }
    }
  }
`;

const getAllRanksQuery = gql`
  query getAllRanksQuery {
    ranks(orderBy: rankName_ASC) {
      rankName
      rankCode
      id
    }
  }
`;

const getAllPhasesQuery = gql`
  query getAllPhasesQuery {
    phases(orderBy: phaseName_ASC) {
      phaseName
      phaseCode
      id
    }
  }
`;

const getAllSubjectsQuery = gql`
  query getAllSubjectsQuery {
    subjects(orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      id
    }
  }
`;

const getAllSubjectGroupsQuery = gql`
  query getAllSubjectGroupsQuery {
    subjectGroups(orderBy: subjectGroupName_ASC) {
      subjectGroupName
      subjectGroupCode
      id
    }
  }
`;

const getAllSpecialtiesOfAnEducationTypeQuery = gql`
  query getAllSpecialtiesOfAnEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      specialty {
        id
        specialtyName
        specialtyCode
      }
    }
  }
`;

const getAllSpecialtiesOfACenterExamSessionQuery = gql`
  query getAllSpecialtiesOfACenterExamSessionQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      centerExamSessionSpecialty {
        id
        specialty {
          id
          specialtyName
          specialtyCode
        }
      }
    }
  }
`;

const getAllSpecialtiesQuery = gql`
  query getAllSpecialtiesQuery {
    specialties(orderBy: specialtyName_ASC) {
      id
      specialtyName
      specialtyCode
    }
  }
`;
const getAllSubjectsOfAnEducTypeQuery = gql`
  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      subject(orderBy: subjectName_ASC) {
        id
        subjectName
        subjectCode
      }
    }
  }
`;
const getAllSubjectSpecialtiesOfASpecialtyQuery = gql`
  query getAllSubjectSpecialtiesOfASpecialtyQuery($id: ID!) {
    specialty(id: $id) {
      id
      subjectSpecialty {
        id
        subject {
          id
          subjectName
          subjectCode
        }
      }
    }
  }
`;

const getAllExamsQuery = gql`
  query getAllExamsQuery {
    exams(orderBy: examName_ASC) {
      examName
      examCode
      id
    }
  }
`;

const getAllGroup2Query = gql`
  query getAllGroup2Query($educType: EducationTypeWhereUniqueInput!) {
    group2Subjects(educType: $educType, orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      subjectGroup
      id
    }
  }
`;

const getAllGroup1Query = gql`
  query getAllGroup1Query($educType: EducationTypeWhereUniqueInput!) {
    group1Subjects(educType: $educType, orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      subjectGroup
      id
    }
  }
`;

const getAllSessionsQuery = gql`
  query getAllSessionsQuery {
    sessions(orderBy: createdAt_DESC) {
      sessionName
      sessionCode
      id
    }
  }
`;

const getAllDivisionsQuery = gql`
  query getAllDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;

const getAllRegionsAndDivisionsQuery = gql`
  query getAllRegionsAndDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const getDivisionsOfARegionQuery = gql`
  query getDivisionsOfARegionQuery($id: ID!) {
    region(id: $id) {
      regName
      id
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;

const getSubDivisionsOfADivisionQuery = gql`
  query getSubDivisionsOfADivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      id
      subDivision(orderBy: subDivName_ASC) {
        subDivName
        subDivCode
        id
      }
    }
  }
`;

const getAllSubDivisionsQuery = gql`
  query getAllSubDivisionsQuery {
    subDivision(orderBy: subDivName_ASC) {
      subDivName
      subDivCode
      id
    }
  }
`;

const getAllTownsQuery = gql`
  query getAllTownsQuery {
    towns(orderBy: townName_ASC) {
      townName
      townCode
      id
    }
  }
`;

const getTownsOfASubDivisionQuery = gql`
  query getTownsOfASubDivision($id: ID!) {
    subDivision(id: $id) {
      subDivName
      id
      town(orderBy: townName_ASC) {
        townName
        townCode
        id
      }
    }
  }
`;

const getCentersOfATownQuery = gql`
  query getCentersOfATownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerCode
        id
      }
    }
  }
`;

const centersPerTownQuery = gql`
  query centersPerTownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerNumber
        centerSecretCode
        centerCode
        id
      }
    }
  }
`;

const getAllCentersQuery = gql`
  query getAllCentersQuery {
    centers(orderBy: centerName_ASC) {
      id
      centerName
      centerCode
    }
  }
`;

const getAllCandidatesQuery = gql`
  query getAllCandidatesQuery {
    candidates(orderBy: cand1stName_ASC) {
      cand1stName
      cand2ndName
      cand3rdName
      email
      image
      phoneNumb
      placeOfBirth
      candCode
      id
    }
  }
`;

///*****************Single object queries */

const singleCenterQuery = gql`
  query singleCenterQuery($id: ID!) {
    center(id: $id) {
      centerName
      centerNumber
      centerCode
      id
    }
  }
`;

const getSingleCenterQuery = gql`
  query getSingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber: $centerNumber) {
      id
      centerNumber
      centerCode
    }
  }
`;

const getSingleProfQuery = gql`
  query getSingleProfQuery($authCode: String!) {
    profByAuthCode(authCode: $authCode) {
      authCode
      id
      auth1stName
    }
  }
`;

const getSingleCenterByCodeQuery = gql`
  query getSingleCenterByCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode: $centerSecretCode) {
      id
      centerCode
    }
  }
`;

const getASingleCenterQuery = gql`
  query getASingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber: $centerNumber) {
      centerNumber
      centerName
      centerCode
      id
    }
  }
`;

const singleTownQuery = gql`
  query singleTownQuery($id: ID!) {
    town(id: $id) {
      townName
      townCode
      id
    }
  }
`;

const getSingleCenterExamSessionQuery = gql`
  query getSingleCenterExamSessionQuery(
    $center: CenterWhereUniqueInput!
    $examSession: ExamSessionWhereUniqueInput!
  ) {
    centerExamSessionsByCode(examSession: $examSession, center: $center) {
      id
    }
  }
`;

const getAllRanksOfAnExamPhaseQuery = gql`
  query getAllRanksOfAnExamPhaseQuery($id: ID!) {
    phase(id: $id) {
      id
      phaseRank(orderBy: rankName_ASC) {
        id
        rankName
        rankCode
      }
    }
  }
`;

const getRegisteredCandidateCountQuery = gql`
  query getRegisteredCandidateCountQuery($id: ID!) {
    registrationsConnection(id: $id) {
      aggregate {
        count
      }
    }
  }
`;

const getCenterExamSessionSpecialtyQuery = gql`
  query getCenterExamSessionSpecialtyQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
  ) {
    centerExamSessionSpecialties(
      centerExamSession: $centerExamSession
      specialty: $specialty
    ) {
      id
    }
  }
`;

const getSpecialtyFromCESSQuery = gql`
  query getSpecialtyFromCESSQuery($id: ID!) {
    centerExamSessionSpecialty(id: $id) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;

const getExamSessionQuery = gql`
  query getExamSessionQuery(
    $exam: ExamWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    examSessions(session: $session, exam: $exam) {
      id
    }
  }
`;

const singleExamQuery = gql`
  query singleExamQuery($id: ID!) {
    exam(id: $id) {
      examName
      examCode
      id
    }
  }
`;

const singleCandidateQuery1 = gql`
  query singleCandidateQuery1($id: ID!) {
    candidate(id: $id) {
      cand1stName
      cand2ndName
      cand3rdName
      dadName
      momName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      user {
        id
      }
      id
    }
  }
`;

const singleCandidateQuery = gql`
  query singleCandidateQuery($id: ID!) {
    candidate(id: $id) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      dadName
      momName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      user {
        id
      }
      gender
    }
  }
`;

const singleExaminerQuery = gql`
  query singleExaminerQuery($id: ID!) {
    examiner(id: $id) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
      examinerMatricule
      examinerCNI
    }
  }
`;

const viewSingleCandidateQuery = gql`
  query viewSingleCandidateQuery($candCode: String!) {
    singleCandidate(candCode: $candCode) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      momName
      dadName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      user {
        id
      }
      gender
    }
  }
`;

const getScoreID = gql`
  query getScoreID($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
    }
  }
`;

const getRegistrations = gql`
  query getRegistrations($candExamSecretCode: String!) {
    registration(candExamSecretCode: $candExamSecretCode) {
      id
      scores {
        id
        subject(orderBy: subjectName_ASC) {
          id
          subjectName
        }
      }
    }
  }
`;

const singleSubDivisionQuery = gql`
  query singleSubDivisionQuery($id: ID!) {
    subDivision(id: $id) {
      subDivName
      subDivCode
      id
    }
  }
`;

const getSingleRegionQuery = gql`
  query getSingleRegionQuery($id: ID!) {
    region(id: $id) {
      regName
      regCode
      id
    }
  }
`;

const singlePhaseQuery = gql`
  query singlePhaseQuery($id: ID!) {
    phase(id: $id) {
      phaseName
      phaseCode
      id
    }
  }
`;

const singleSpecialtyQuery = gql`
  query singleSpecialtyQuery($id: ID!) {
    specialty(id: $id) {
      specialtyName
      specialtyCode
      id
    }
  }
`;

const dataForAverage = gql`
  query dataForAverage($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
      subjectAve
      coeff
    }
  }
`;

const singleDivisionQuery = gql`
  query singleDivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      divCode
      id
    }
  }
`;

const singleRankQuery = gql`
  query singleRankQuery($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;

const singleSubjectQuery = gql`
  query singleSubjectQuery($id: ID!) {
    subject(id: $id) {
      subjectName
      subjectCode
      id
    }
  }
`;

const singleSubjectGroupQuery = gql`
  query singleSubjectGroupQuery($id: ID!) {
    subjectGroup(id: $id) {
      subjectGroupName
      subjectGroupCode
      id
    }
  }
`;

const singleSessionQuery = gql`
  query singleSessionQuery($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`;
///*****************End Single object queries */

export {
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getAllSpecialtiesOfAnEducationTypeQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getDivisionsOfARegionQuery,
  getAllDivisionsQuery,
  getSubDivisionsOfADivisionQuery,
  getTownsOfASubDivisionQuery,
  getCentersOfATownQuery,
  getAllEducationTypesQuery,
  getAllSubjectsQuery,
  getAllRanksQuery,
  getAllCandidatesQuery,
  getAllCentersQuery,
  getSingleRegionQuery,
  getAllSpecialtiesQuery,
  getAllSubDivisionsQuery,
  getAllSubjectsOfAnEducTypeQuery,
  getScoreID,
  singleSpecialtyQuery,
  getRegistrations,
  singleSubjectQuery,
  singleCandidateQuery1,
  singleCandidateQuery,
  viewSingleCandidateQuery,
  singleCenterQuery,
  singleExamQuery,
  singleTownQuery,
  getAllCenterResultsQuery,
  singleSessionQuery,
  singleDivisionQuery,
  singleSubDivisionQuery,
  singleEducationTypeQuery,
  singleRankQuery,
  centerExamSessionSpecialtyForResultsQuery,
  getAllCandidateRegistrationIDsQuery,
  getCenterExamSessionSpecialtyQuery,
  getExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getCenterResultsQuery,
  getCandidateRegistrationIDQuery,
  getCandidateRegistrationIDsQuery,
  centerExamSessionForResultsQuery,
  getCandidateIDQuery,
  getASingleCenterQuery,
  getRegisteredCandidateCountQuery,
  centersPerTownQuery,
  getSingleCenterQuery,
  getCandidateResultsQuery,
  getCenterRegistrationIDsQuery,
  getCandidateByCandCodeQuery,
  getSingleCenterExamSessionQuery,
  getEachCandidateResultsQuery,
  getCenterIDFromCenterCodeQuery,
  getRegistrationIDFromRegNumberQuery,
  centerExamSessionSpecialtyResultsQuery,
  dataForAverage,
  getAllPhasesQuery,
  getAllRegionsQuery,
  getAllUsersQuery,
  singleExaminerQuery,
  getCandidateRegistrationInfoQuery,
  getCESExaminerQuery,
  getExaminerIDQuery,
  getAllTownsQuery,
  getSpecialtyFromCESSQuery,
  getExaminerRegistrationQuery,
  getSingleProfQuery,
  getAllGroup1Query,
  getAllGroup2Query,
  singleSubjectGroupQuery,
  getAllRegionsAndDivisionsQuery,
  getAllSubjectGroupsQuery,
  getAllRanksOfAnExamPhaseQuery,
  currentUserQuery,
  singlePhaseQuery,
  getSingleCenterByCodeQuery,
};
