import React, { Component } from "react";
import TalentCard from "./TalentCard";
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
  render() {
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
                  />
                  <label className="custom-control-label" htmlFor="genderMale">
                    <span>Male</span>
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    name="gender"
                    id="genderFemale"
                    type="radio"
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
                  />
                  <label className="custom-control-label" htmlFor="genderBoth">
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
                    name="voiceAge"
                    id="voiceAgeChild"
                    type="radio"
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
                    name="voiceAge"
                    id="voiceAgeTeen"
                    type="radio"
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
                    name="voiceAge"
                    id="voiceAgeYoungAdult"
                    type="radio"
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
                    name="voiceAge"
                    id="voiceAgeMiddleAged"
                    type="radio"
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
                    name="voiceAge"
                    id="voiceAgeSenior"
                    type="radio"
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
                  <Input type="select" name="country" id="country" required>
                    <option value="">Select country</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Croatia">Croatia</option>
                    <option value="Serbia">Serbia</option>
                  </Input>
                </FormGroup>
              </div>
            </Col>
            <Col className="mt-auto mb-auto mt-md-0" lg="3" sm="6">
              <div className="d-flex justify-content-center">
                <Button className="ml-3" color="primary" type="button">
                  Invite to Job
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default TalentFilter;

/*
    
          <Row className="d-flex justify-content-center">
            <h3 className="ml-5">
              <small className="d-block text-center font-weight-bold mb-2 mt-1">
                Voice Age
              </small>
            </h3>
            <Container className="ml-2">
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  name="voiceAge"
                  id="voiceAgeChild"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="voiceAgeChild">
                  <span>Child (5-12)</span>
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  name="voiceAge"
                  id="voiceAgeTeen"
                  type="radio"
                />
                <label className="custom-control-label" htmlFor="voiceAgeTeen">
                  <span>Teen (13-17)</span>
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  className="custom-control-input"
                  name="voiceAge"
                  id="voiceAgeYoungAdult"
                  type="radio"
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
                  name="voiceAge"
                  id="voiceAgeMiddleAged"
                  type="radio"
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
                  name="voiceAge"
                  id="voiceAgeSenior"
                  type="radio"
                />
                <label
                  className="custom-control-label"
                  htmlFor="voiceAgeSenior"
                >
                  <span>Senior (55+)</span>
                </label>
              </div>
            </Container>
          </Row>
          <Row className="d-flex justify-content-center">
            <h3 className="ml-5">
              <small className="d-block text-center font-weight-bold mb-2 mt-1">
                Language
              </small>
            </h3>
            <Container>
              <FormGroup>
                <Input type="select" name="country" id="country" required>
                  <option value="">Select country</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Croatia">Croatia</option>
                  <option value="Serbia">Serbia</option>
                </Input>
              </FormGroup>
            </Container>
          </Row>
        </Container>
      </>
      */
