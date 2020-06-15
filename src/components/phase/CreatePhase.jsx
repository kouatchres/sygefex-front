import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import Form from '../styles/Form';
import {StyledPage} from '../styles/StyledPage';
import Error from '../ErrorMessage';
import {createPhaseMutation} from '../queries&Mutations&Functions/Mutations';

class CreatePhase extends Component {
  state = {
    phaseName: '',
    phaseCode: '',
  };

  handleChange = e => {
    const {name, type, value} = e.target;
    const val = type === 'number' ? parseInt (value) : value;
    this.setState ({[name]: val});
  };

  resetForm () {
    this.setState ({phaseName: '', phaseCode: ''});
  }

  render () {
    const {phaseName, phaseCode} = this.state;
    return (
      <Mutation mutation={createPhaseMutation} variables={this.state}>
        {(createPhase, {loading, error}) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault ();
                const res = await createPhase ();
                console.log (res);
                this.resetForm ();
              }}
            >
              <h4>Nouvelle Phase de L'Examen</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="phaseName"
                  name="phaseName"
                  placeholder="Nom de la Phase de L'Examen"
                  value={phaseName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="phaseCode"
                  name="phaseCode"
                  placeholder="Code de la Phase de L'Examen"
                  value={phaseCode}
                  onChange={this.handleChange}
                  required
                />
                <div className="submitButton">
                  <button type="submit">
                    Valid{loading ? 'ation en cours' : 'er'}
                  </button>
                </div>
              </fieldset>
            </Form>
          </StyledPage>
        )}
      </Mutation>
    );
  }
}
export default CreatePhase;
export {createPhaseMutation};
