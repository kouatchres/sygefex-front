import gql from 'graphql-tag';

const getACenterAdminQuery = gql`
  query getACenterAdminQuery($authCode: String!) {
    centerAdminSignIn(authCode: $authCode) {
      id
      authCode
    }
  }
`;

const meQuery = gql`
  query meQuery {
    me {
      id
     email
     name 
     password
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
    $examiner: ExaminerWhereUniqueInput!,
     $centerExamSession:CenterExamSessionWhereUniqueInput!) {
    getCenterExamSessionExaminers(
      examiner: $examiner, 
      centerExamSession:$centerExamSession  ) {
     
      id
    }
  }
`;

const singleSubjectTypeQuery = gql`
  query singleSubjectTypeQuery($id: ID!) {
    subjectType(id: $id) {
      subjectTypeName
      subjectTypeCode
      id
    }
  }
`;

const getAllCenterAdminsQuery = gql`
  query getAllCenterAdminsQuery {
    centerAdmins {
      id
      authName
      authCode
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
const getAllRegionsOfACountryQuery = gql`
  query getAllRegionsOfACountryQuery($id: ID!) {
    country(id: $id) {
      id
      region(orderBy: regName_ASC){
       regName
      regCode
      id
      }
    }
  }
`;
const getAllRegionsQuery = gql`
  query getAllRegionsQuery {
      regions{
       regName
      regCode
      id
  }}
`;
const getAllCountrysQuery = gql`
  query getAllCountrysQuery {
    countries(orderBy:countryName_ASC) {
      countryName
      countryCode
      id
    }
  }
`;
const getAllCountrysRegionCreateQuery = gql`
  query getAllCountrysRegionCreateQuery {
    countries(orderBy:countryName_ASC) {
           id
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
        dateOfBirth
        gender {
          genderName
        }
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
        subjectSeries {
          subjectName
          series {
            id
            seriesName
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
        dateOfBirth
        gender {
          genderName
        }
      }
      centerExamSessionSeries {
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
        }
      }
      center {
        id
        centerName
      }}
      series {
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
      }
      scores {
        id
        subjectAve
        coeff
        subjectSeries  {
          id
          subjectName
        }
      }
    }
  }
`;

const getExaminerRegistrationQuery = gql`
  query getExaminerRegistrationQuery($id: ID!) {
    centerExamSessionExaminer(id: $id) {
      id
      examiner{
        examiner1stName
        examiner2ndName
        examinerOtherNames
        examinerMatricule
        examinerPhone
        examinerCNI
        examinerImage
        examinerEmail
        gender {
          genderName
        }
      }
      centerExamSession{
        id 
      examSession {
       id
        exam{
          id 
          examName
        }
        session{
          id
          sessionName
      }}
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
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
        subjectSeries {
          id
          subjectName
        }
      }
     registration{
       id
       candidate{
         cand1stName
         id
       }
      scores {
        id
        subjectAve
        coeff
        subjectSeries {
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
        gender {
          genderName
        }
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      series {
        id
        seriesName
      }
      center {
        centerName
      }
    }
  }
`;

const getCandidateRegistrationIDQuery = gql`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(centerExamSession: $centerExamSession, candidate: $candidate) {
      id
      
    }
  }
`;

const getCandidateRegistrationIDsQuery = gql`
  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!  ) {
    candidateRegistrationIDs(candidate: $candidate) {
      id
      
    }
  }
`;

const getAllCandidateRegistrationIDsQuery = gql`
  query getAllCandidateRegistrationIDsQuery($id: ID!  ) {
    candidate( id: $id) {
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
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
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
        subjectSeries {
          id
          subjectName
        }
      }
        }
      id
      
    }
  }
`;

const getCandidateIDQuery = gql`
  query getCandidateIDQuery(
    $candCode: String!
  ) {
    candidateCode(candCode: $candCode) {
      id
    }
  }
`;

const getRegistrationIDFromRegNumberQuery = gql`
  query getRegistrationIDFromRegNumberQuery(
    $candRegistrationNumber: String!
  ) {
    candidateRegistrationNumber(candRegistrationNumber: $candRegistrationNumber) {
     id
     candidate{
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
      gender{
id
genderName
      }
      registration{
        id
     
        centerExamSessionSeries{
          id
         series{
           id
           seriesName
         }
         centerExamSession{
          center{
            id
            centerName
          }
          examSession{
            id
            exam{
              id
              examName
            }
            session{
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
        subjectSeries {
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
  query getCenterIDFromCenterCodeQuery($centerCode: String!) {
    centerByCode(centerCode: $centerCode) {
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

const centerExamSessionSeriesForResultsQuery = gql`
  query centerExamSessionSeriesForResultsQuery($centerExamSession: String !) {
    centerExamSessionSeriesForResults(centerExamSession: $centerExamSession) {
      id
      series{
        id
        seriesName
      }
      
    }
  }
`;

const centerExamSessionForResultsQuery = gql`
  query centerExamSessionForResultsQuery($id: ID !) {
    centerExamSession(id: $id) {
      id
      center{
                 id
                 centerName
                 centerCode
               }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }}
           centerExamSessionSeries{
             id
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
                 id
                 subjectAve

               }
             }
           }
       
    }
  }
`;


const centerExamSessionSeriesResultsQuery = gql`
  query centerExamSessionSeriesResultsQuery($id: ID !) {
    centerExamSessionSeries(id: $id) {
      id
      centerExamSession{
                 id
                center{
                  id
                  centerName
                  centerCode
                }
               examSession{
               exam{
                 id
                 examName
               }
               session{
                 id
                 sessionName
               }
               }}
         
          
            series{
              id
              seriesName
              seriesCode
            }
             registration{
               id
               candRegistrationNumber
               candExamSecretCode
               candidate{
            id
            cand1stName
            cand2ndName
            cand3rdName
            dateOfBirth
            placeOfBirth
            email
            phoneNumb
            gender{
              id
              genderName
            }

               }
               scores{
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
  phases(orderBy:phaseName_ASC) {
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

const getAllGendersQuery = gql`
  query getAllGendersQuery {
    genders(orderBy: genderName_ASC) {
      id
      genderName
      genderCode
    }
  }
`;

const getAllSeriesOfAnEducationTypeQuery = gql`
  query getAllSeriesOfAnEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      series(orderBy: seriesName_ASC) {
        id
        seriesName
        seriesCode
      }
    }
  }
`;

const getAllSeriesOfACenterExamSessionQuery = gql`
  query getAllSeriesOfACenterExamSessionQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      centerExamSessionSeries{
      series {
        id
        seriesName
        seriesCode
      }
    }}
  }
`;



const getAllSeriesQuery = gql`
  query getAllSeriesQuery {
    serieses(orderBy: seriesName_ASC) {
      id
      seriesName
      seriesCode
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
const getAllSubjectsOfASeriesQuery = gql`
  query getAllSubjectsOfASeriesQuery($id: ID!) {
    series(id: $id) {
      id
      seriesName
      subjectSeries {
        id
        subjectName
        subjectCode
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

const getAllSubjectTypesQuery = gql`
  query getAllSubjectTypesQuery {
    subjectTypes(orderBy: subjectTypeName_DESC) {
      id
      subjectTypeName
      subjectTypeCode
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
    centerByNumber(centerNumber:  $centerNumber) {
      id
      centerNumber
      centerCode
    }
  }
`;

const getSingleProfQuery = gql`
  query getSingleProfQuery($authCode: String!) {
   profByAuthCode(authCode:  $authCode) {
     authCode
      id
      auth1stName
    }
  }
`;


const getSingleCenterByCodeQuery = gql`
  query getSingleCenterByCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode:  $centerSecretCode) {
      id
      centerCode
     
    }
  }
`;

const getASingleCenterQuery = gql`
  query getASingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber:  $centerNumber) {
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
      phaseRank{
             id
          rankName
          rankCode
      }
    }
  }
`;

const getRegisteredCandidateCountQuery = gql`
  query getRegisteredCandidateCountQuery($id: ID!)
 {
    registrationsConnection(id: $id) {
     aggregate{
       count
     }
    }
  }
`;

const getCenterExamSessionSeriesQuery = gql`
  query getCenterExamSessionSeriesQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $series: SeriesWhereUniqueInput!
  ) {
    centerExamSessionSerieses(series: $series, centerExamSession: $centerExamSession) {
      id

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
      gender {
        id
        genderName
      }
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
      gender {
        id
        genderName
      }
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

const singleGenderQuery = gql`
  query singleGenderQuery($id: ID!) {
    gender(id: $id) {
      genderName
      genderCode
      id
    }
  }
`;

const singleSeriesQuery = gql`
  query singleSeriesQuery($id: ID!) {
    series(id: $id) {
      seriesName
      seriesCode
      id
    }
  }
`;

const singleCenterAdminQuery = gql`
  query singleCenterAdminQuery($id: ID!) {
    centerAdmin(id: $id) {
      centerAdminName
      centerAdminCode
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
  getAllSubjectsOfASeriesQuery,
  getAllSubjectTypesQuery,
  getAllGendersQuery,
  getAllEducTypeQuery,
  getAllRegionsOfACountryQuery,
  getAllSeriesOfAnEducationTypeQuery,
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
  getAllEducTypesOfAnExam,
  getAllCandidatesQuery,
  getAllCentersQuery,
  getSingleRegionQuery,
  getACenterAdminQuery,
  getAllCenterAdminsQuery,
  getAllSeriesQuery,
  getAllSubDivisionsQuery,
  getAllSubjectsOfAnEducTypeQuery,
  getScoreID,
  singleSeriesQuery,
  getRegistrations,
  singleSubjectQuery,
  singleCandidateQuery1,
  singleCandidateQuery,
  viewSingleCandidateQuery,
  singleCenterQuery,
  singleCenterAdminQuery,
  singleExamQuery,
  singleTownQuery,
  schoolDataQuery,
  getAllCenterResultsQuery,
  singleSessionQuery,
  singleDivisionQuery,
  singleSubDivisionQuery,
  singleSubjectTypeQuery,
  singleEducationTypeQuery,
  singleRankQuery,
  centerExamSessionSeriesForResultsQuery,
  getAllCandidateRegistrationIDsQuery,
  getCenterExamSessionSeriesQuery,
  singleGenderQuery,
  getExamSessionQuery,
  getAllSeriesOfACenterExamSessionQuery,
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
  centerExamSessionSeriesResultsQuery,
  dataForAverage,
  getAllCountrysRegionCreateQuery,
  getAllPhasesQuery,
  getAllRegionsQuery,
  getAllCountrysQuery,
  singleExaminerQuery,
  getCESExaminerQuery,
  getAllTownsQuery,
  getExaminerRegistrationQuery,
  getSingleProfQuery,
  getAllRanksOfAnExamPhaseQuery,
  getASinglePhaseRankQuery,
  meQuery,
  getSingleCenterByCodeQuery
};
