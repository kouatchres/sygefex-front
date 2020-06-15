import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js'
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
  SygefexSelect
} from '../utils/FormInputs'
import {
  getAllCountrysQuery,
  getDivisionsOfARegionQuery,
  getAllRegionsOfACountryQuery
} from '../queries&Mutations&Functions/Queries'
import { getObjectFromID } from '../queries&Mutations&Functions/Functions'
import { createSubDivisionMutation } from '../queries&Mutations&Functions/Mutations'

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
`
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`

const validationSchema = Yup.object().shape({
  division: Yup.string().required("Choix Du type d'Enseignement Obligatoire"),
  subDivName: Yup.string().required('Choix de la matière Obligatoire'),
  subDivCode: Yup.string().required('Choix de la Séries Obligatoire')
})

const SubDivHooks = () => {
  const initialValues = {
    subDivName: '',
    subDivCode: '',
    division: ''
  }
  const [state, setState, handleReactSelectChange] = useForm({ regionID: '' })

  const { data, loading: loadingCount, error: errorCount } = useQuery(
    getAllCountrysQuery
  )
  {
    loadingCount && <p>Loading Countries from DB...</p>
  }
  {
    errorCount && <Error error={error} />
  }
  const { countries } = { ...data }
  console.log(countries)
  const reducedCountries = countries && countries.reduce(item => item)
  console.log(reducedCountries)
  const { id } = { ...reducedCountries }
  console.log(id)

  const { data: dataCountry, loadingCountry, errCountry } = useQuery(
    getAllRegionsOfACountryQuery,
    {
      variables: { id: id }
    }
  )
  {
    loadingCountry && <p>loading...</p>
  }
  {
    errCountry && <Error error={errCountry} />
  }
  console.log(dataCountry)
  const getCountry = dataCountry && dataCountry.country
  console.log(getCountry)
  const { region } = { ...getCountry }
  const getRegionsOptions =
    region && region.map(item => ({ value: item.id, label: item.regName }))
  console.log(state.regionID)

  const { data: dataRegion, loadingRegion, errRegion } = useQuery(
    getDivisionsOfARegionQuery,
    {
      skip: !state.regionID,
      variables: { id: state.regionID }
    }
  )
  {
    loadingRegion && <p>loading...</p>
  }
  {
    errRegion && <Error error={errRegion} />
  }
  console.log(dataRegion)
  const getRegion = dataRegion && dataRegion.region
  const { division } = { ...getRegion }
  console.log(division)
  const getDivOptions =
    division && division.map(item => ({ value: item.id, label: item.divName }))

  const [createSubDivision, { loading, error }] = useMutation(
    createSubDivisionMutation,
    {
      refetchQueries: ['getAllSubDivisionsQuery']
    }
  )
  return (
    <Formik
      method='POST'
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        const res = await createSubDivision({
          variables: {
            ...values,
            division: values.division && getObjectFromID(values.division.value)
          }
        })
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          console.log(res)
          actions.resetForm(true)
          actions.setSubmitting(false)
        }, 400)
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouvel arrondissement</h4>
            <Error error={error} />
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name='regionID'
                      placeholder={'La Région'}
                      options={getRegionsOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={value => setFieldValue('division', value)}
                      name='division'
                      placeholder='Le Département'
                      options={getDivOptions}
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name='subDivName'
                      type='text'
                      label="Libéllé de l'arrondissement"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name='subDivCode'
                      type='text'
                      label="Code de l'arrondissement"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type='submit' disabled={isSubmitting}>
                      Valid{isSubmitting ? 'ation en cours' : 'er'}
                    </StyledButton>
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
export default SubDivHooks
