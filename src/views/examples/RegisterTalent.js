import React, { Component } from "react";
import axios from "axios";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { useHistory } from "react-router-dom";

//ermin
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Label,
} from "reactstrap";
class RegisterTalent extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    intonations: [],
    voiceTypes: [],
    languages: [],
  };

  createCheckbox = (arr, name, divId) => {
    if (name === "intonations") {
      arr.forEach((i) => {
        var div = document.createElement("div");

        var label = document.createElement("label");
        var checkbox = document.createElement("input");

        //checkbox.className = "custom-control-input";
        checkbox.type = "checkbox"; // make the element a checkbox
        checkbox.name = "intonations"; // give it a name we can check on the server side
        checkbox.value = `${i._links.intonation.href}`;

        // make its value "pair"

        div.appendChild(checkbox);
        label.innerHTML = "  " + `${i.type}`;

        div.appendChild(label); // add the box to the element
        // add the description to the element

        // add the label element to your div
        document.getElementById(`${divId}`).appendChild(div);
      });
    } else if (name === "languages") {
      arr.forEach((i) => {
        var div = document.createElement("div");

        var label = document.createElement("label");
        var checkbox = document.createElement("input");

        //checkbox.className = "custom-control-input";
        checkbox.type = "checkbox"; // make the element a checkbox
        checkbox.name = `${name}`; // give it a name we can check on the server side
        checkbox.value = `${i._links.language.href}`;

        // make its value "pair"

        div.appendChild(checkbox);
        label.innerHTML = "  " + `${i.name}`;

        div.appendChild(label); // add the box to the element
        // add the description to the element

        // add the label element to your div
        document.getElementById(`${divId}`).appendChild(div);
      });
    } else {
      arr.forEach((i) => {
        var div = document.createElement("div");

        var label = document.createElement("label");
        var checkbox = document.createElement("input");

        //checkbox.className = "custom-control-input";
        checkbox.type = "checkbox"; // make the element a checkbox
        checkbox.name = `${name}`; // give it a name we can check on the server side
        checkbox.value = `${i._links.voiceType.href}`;

        // make its value "pair"

        div.appendChild(checkbox);
        label.innerHTML = "  " + `${i.name}`;

        div.appendChild(label); // add the box to the element
        // add the description to the element

        // add the label element to your div
        document.getElementById(`${divId}`).appendChild(div);
      });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const intonations = document.querySelectorAll(
      'input[name="intonations"]:checked'
    );
    const checkedIntonations = [];
    intonations.forEach((i) => {
      checkedIntonations.push(i.value);
    });

    const languages = document.querySelectorAll(
      'input[name="languages"]:checked'
    );
    const checkedLanguages = [];
    languages.forEach((i) => {
      checkedLanguages.push(i.value);
    });

    const voiceTypes = document.querySelectorAll(
      'input[name="voiceTypes"]:checked'
    );
    const checkedVoiceTypes = [];
    voiceTypes.forEach((i) => {
      checkedVoiceTypes.push(i.value);
    });

    console.log(checkedIntonations);
    console.log(checkedLanguages);
    console.log(checkedVoiceTypes);
    const talent = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      enabled: true,
      lastPasswordResetDate: "11.03.2020.",
      roles: ["http://localhost:8080/api/roles/3"],
      languagesSpoken: checkedLanguages,
      voiceTypes: checkedVoiceTypes,
      intonations: checkedIntonations,
    };

    console.log(talent);
    try {
      let response = await axios.post(
        "http://localhost:8080/api/talents",
        talent
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  async componentDidMount() {
    this.refs.main.scrollTop = 0;
    const intonations = await axios.get(
      "http://localhost:8080/api/intonations"
    );
    const voiceTypes = await axios.get("http://localhost:8080/api/voiceTypes");
    const languages = await axios.get("http://localhost:8080/api/languages");
    this.setState({
      intonations: intonations.data._embedded.intonations,
      voiceTypes: voiceTypes.data._embedded.voiceTypes,
      languages: languages.data._embedded.languages,
    });
    this.createCheckbox(
      intonations.data._embedded.intonations,
      "intonations",
      "intonations"
    );
    this.createCheckbox(
      languages.data._embedded.languages,
      "languages",
      "languages"
    );
    this.createCheckbox(
      voiceTypes.data._embedded.voiceTypes,
      "voiceTypes",
      "voiceTypes"
    );
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h1>Sign up</h1>
                      </div>

                      <div className="text-center"></div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="First name"
                              name="firstname"
                              type="text"
                              value={this.state.firstname}
                              onChange={this.handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Last name"
                              name="lastname"
                              type="text"
                              value={this.state.lastname}
                              onChange={this.handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="User name"
                              name="username"
                              type="text"
                              value={this.state.username}
                              onChange={this.handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="email"
                              placeholder="Email"
                              type="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              name="password"
                              autoComplete="off"
                              value={this.state.password}
                              onChange={this.handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>

                        <div id="intonations">
                          <h5>Intonations</h5>
                          {/*this.createCheckbox(
                            this.state.intonations,
                            "intonations",
                            "intonations"
                          )*/}
                        </div>
                        <div id="languages">
                          <h5>Languages</h5>
                          {/*this.createCheckbox(
                            this.state.languages,
                            "languages",
                            "languages"
                          )*/}
                        </div>
                        <div id="voiceTypes">
                          <h5>Voice Types</h5>
                          {/*this.createCheckbox(
                            this.state.voiceTypes,
                            "voiceTypes",
                            "voiceTypes"
                          )*/}
                        </div>
                        <React.Fragment></React.Fragment>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={this.handleSubmit}
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default RegisterTalent;
