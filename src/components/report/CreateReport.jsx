import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createNewReportMutation } from "../queries&Mutations&Functions/Mutations";

class CreateReport extends Component {
  state = {
    centerAdmin: "",
    reportName: "",
    reportImage: "",
    centerAdminCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  transformCenterAdmin = authCodeValue => {
    const centerAdminObj = {
      authCode: `${authCodeValue}`
    };
    console.log(centerAdminObj);
    return centerAdminObj;
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
      reportImage: file.secure_url
      // biggerPhoto: <file className="e"></file>ager[0].secure_url,
    });
  };

  resetForm() {
    this.setState({ reportName: "", centerAdminCode: "" });
  }
  render() {
    const { centerAdminCode } = this.state;
    return (
      <Mutation
        mutation={createNewReportMutation}
        variables={{
          ...this.state,
          centerAdmin: centerAdminCode && this.transformCenterAdmin(centerAdminCode)
        }}
      >
        {(createReport, { loading, error }) => (
          <MinimStyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createReport();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouveau Rapport</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder=" Téléchargez rapport"
                  onChange={this.uploadFile}
                  required
                />
                <input
                  type="text"
                  id="reportName"
                  name="reportName"
                  placeholder="Nom du rapport"
                  value={this.state.reportName}
                  onChange={this.handleChange}
                  required
                />

                <input
                  type="text"
                  id="centerAdminCode"
                  name="centerAdminCode"
                  placeholder="Entrez votre code Secret"
                  value={this.state.centerAdminCode}
                  onChange={this.handleChange}
                  required
                />

                <div className="submitButton">
                  <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                </div>
              </fieldset>
            </Form>
          </MinimStyledPage>
        )}
      </Mutation>
    );
  }
}
export default CreateReport;
