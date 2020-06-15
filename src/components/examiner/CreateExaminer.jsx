import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from '../styles/Form'
import { StyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js'
import Router from 'next/router'
import styled from 'styled-components'
import { createExaminerMutation } from '../queries&Mutations&Functions/Mutations'
import {
  uniqueCodeGen,
  getSelectedObject,
} from '../queries&Mutations&Functions/Functions'

const CreateexaminerForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  img {
    margin-top: 1rem;
    margin-left: 5rem;
    height: 15rem;
    width: 15rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`
const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`
const FirstDataFrame = styled.div`
  display: flex;
  flex-direction: column;
`

class CreateExaminer extends Component {
  state = {
    examiner1stName: '',
    examiner2ndName: '',
    examinerOtherNames: '',
    examinerEmail: '',
    examinerImage: '',
    examinerPhone: '',
    examinerCNI: '',
    examinerMatricule: '',
    examinerCode: '',
  }

  handleChange = e => {
    const { name, value, type } = e.target
    const val = type === 'number' ? parseInt(value) : value
    this.setState({ [name]: val })
  }

  resetForm() {
    this.setState({
      examiner1stName: '',
      examiner2ndName: '',
      examinerOtherNames: '',
      examinerEmail: '',
      examinerImage: '',
      examinerPhone: '',
      examinerCNI: '',
      examinerMatricule: '',
      examinerCode: '',
    })
  }

  uploadFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ineximages')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/inex/image/upload',
      {
        method: 'POST',
        body: data,
      },
    )
    const file = await res.json()
    console.log(file)
    this.setState({
      examinerImage: file.secure_url,
      // biggerPhoto: <file className="e"></file>ager[0].secure_url,
    })
  }

  render() {
    const {
      examiner1stName,
      examiner2ndName,
      examinerOtherNames,
      examinerEmail,
      examinerImage,
      examinerPhone,
      examinerCNI,
      examinerMatricule,
    } = this.state
    return (
      <Mutation
        mutation={createExaminerMutation}
        variables={{
          ...this.state,
          examinerCode: uniqueCodeGen(6),
        }}
      >
        {(createCenterExaminer, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault()
                const res = await createCenterExaminer()
                console.log(res)
                Router.push({
                  pathname: '/show/singleCenterExaminer',
                  query: {
                    id: res.data.createExaminer.id,
                  },
                })
                this.resetForm()
              }}
            >
              <h4>Enregistrer un Nouveau Examinateur</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <CreateexaminerForm>
                  <PicFrame>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="photo"
                      onChange={this.uploadFile}
                      required
                    />
                    <div>
                      {examinerImage && <img src={examinerImage} alt="Upload image" />}
                    </div>
                    <FirstDataFrame>
                      <input
                        type="text"
                        id="examiner1stName"
                        name="examiner1stName"
                        placeholder="Nom"
                        value={examiner1stName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="examiner2ndName"
                        name="examiner2ndName"
                        placeholder="Prenoms"
                        value={examiner2ndName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="examinerOtherNames"
                        name="examinerOtherNames"
                        placeholder="Autres noms"
                        value={examinerOtherNames}
                        onChange={this.handleChange}
                        required
                      />
                    </FirstDataFrame>
                  </PicFrame>
                  <DataFrame>
                    <input
                      type="email"
                      id="examinerEmail"
                      name="examinerEmail"
                      placeholder="Email"
                      value={examinerEmail}
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      type="number"
                      id="examinerPhone"
                      name="examinerPhone"
                      placeholder="No: portable"
                      value={examinerPhone}
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      type="text"
                      id="examinerCNI"
                      name="examinerCNI"
                      placeholder="Numero de CNI"
                      value={examinerCNI}
                      onChange={this.handleChange}
                      required
                    />

                    <input
                      type="text"
                      id="examinerMatricule"
                      name="examinerMatricule"
                      placeholder="No Matricule"
                      value={examinerMatricule}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="submitButton">
                      <button type="submit">
                        Valid{loading ? 'ation en cours' : 'er'}
                      </button>
                    </div>
                  </DataFrame>
                </CreateexaminerForm>
              </fieldset>
            </Form>
          </StyledPage>
        )}
      </Mutation>
    )
  }
}

export default CreateExaminer
