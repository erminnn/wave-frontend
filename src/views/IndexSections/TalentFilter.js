import React, { Component } from "react";
import { Consumer } from "../../context.js";
import {
  Container,
  Row,
  FormGroup,
  Input,
  Card,
  Col,
  Button,
} from "reactstrap";

class TalentFilter extends Component {
  state = {
    gender: "",
    voice_age: "",
    language: "",
  };
  handleChange = (dispatch, event) => {
    dispatch({
      type: "FILTER_TALENTS",
      payload: {
        filter_field: event.target.name,
        filter_value: event.target.value,
      },
    });
  };
  onClearAllFilters = () => {
    document
      .querySelectorAll("input[type=radio]")
      .forEach((el) => (el.checked = false));
    document.querySelector("#defaultOption").selected = true;
    this.setState({ gender: "", voice_age: "", language: "" });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <Container>
              <Card className="border border-primary mb-2">
                <Row>
                  <Col lg="3" md="6">
                    <h3>
                      <small className="d-block text-center font-weight-bold mb-2 mt-1">
                        Gender
                      </small>
                    </h3>
                    <div className="ml-5">
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="gender"
                          id="genderMale"
                          type="radio"
                          value="Male"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="genderMale"
                        >
                          <span>Male</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="gender"
                          id="genderFemale"
                          type="radio"
                          value="Female"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="genderFemale"
                        >
                          <span>Female</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="gender"
                          id="genderBoth"
                          type="radio"
                          value="Both"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="genderBoth"
                        >
                          <span>Both</span>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col className="mt-4 mt-md-0" lg="3" sm="6">
                    <h3>
                      <small className="d-block text-center font-weight-bold mb-2 mt-1">
                        Voice Age
                      </small>
                    </h3>
                    <div className="ml-5">
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="voice_age"
                          id="voiceAgeChild"
                          type="radio"
                          value="Child"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="voiceAgeChild"
                        >
                          <span>Child (5-12)</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="voice_age"
                          id="voiceAgeTeen"
                          type="radio"
                          value="Teen"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="voiceAgeTeen"
                        >
                          <span>Teen (13-17)</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="voice_age"
                          id="voiceAgeYoungAdult"
                          type="radio"
                          value="Young Adult"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="voiceAgeYoungAdult"
                        >
                          <span>Young Adult (17-34)</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="voice_age"
                          id="voiceAgeMiddleAged"
                          type="radio"
                          value="Middle Aged"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="voiceAgeMiddleAged"
                        >
                          <span>Middle Aged (17-34)</span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          name="voice_age"
                          id="voiceAgeSenior"
                          type="radio"
                          value="Senior"
                          onChange={this.handleChange.bind(this, dispatch)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="voiceAgeSenior"
                        >
                          <span>Senior (55+)</span>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col className="mt-4 mt-md-0" lg="3" sm="6">
                    <h3>
                      <small className="d-block text-center font-weight-bold mb-2 mt-1">
                        Language
                      </small>
                    </h3>
                    <div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="language"
                          id="language"
                          onChange={this.handleChange.bind(this, dispatch)}
                          required
                        >
                          <option value="" id="defaultOption">
                            Select language
                          </option>
                          <option value="Bosnian">Bosnian</option>
                          <option value="English">English</option>
                          <option value="Deutsch">Deutsch</option>
                        </Input>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col className="mt-auto mb-auto mt-md-0" lg="3" sm="6">
                    <div className="d-flex justify-content-center">
                      <Button
                        className="ml-3 mb-2"
                        color="primary"
                        type="button"
                        onClick={this.onClearAllFilters}
                      >
                        Clear All
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

export default TalentFilter;
