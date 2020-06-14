import React, {useRef, useState} from "react";
// reactstrap components
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
} from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Register () {
  const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
  };
  const [state, setState] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState("");

  let ref = useRef("main");
  let history = useHistory();

 /* componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }*/


  function getData() {
    return {
      "username": state.username,
      "password": state.password,
      "firstName": state.firstname,
      "lastName": state.lastname,
      "email": state.email,
      "enabled": true,
      "lastPasswordResetDate": "11.04.2020.",
      "roles": [
        "http://localhost:8080/api/roles/1"
      ]
    };
  }

  let handleSubmit = async (event) => {
    console.log(state);
    event.preventDefault();

    try {
      let response = await axios.post('http://localhost:8080/api/users', getData());
      console.log(response)
      setState(initialState)
      setSuccessMsg("You have registered successfully!");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = e => {
    setSuccessMsg("");
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

    return (
      <>
        <DemoNavbar />
        <main ref={ref}>
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
                      <h4 className="text-success text-center"> {successMsg}</h4>
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
                              value={state.firstname}
                              onChange={handleChange}
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
                              value={state.lastname}
                              onChange={handleChange}
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
                              value={state.username}
                              onChange={handleChange}
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
                              value={state.email}
                              onChange={handleChange}
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
                              value={state.password}
                              onChange={handleChange}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="select"
                            name="country"
                            id="country"
                            value={state.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select country</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Croatia">Croatia</option>
                            <option value="Serbia">Serbia</option>
                          </Input>
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={handleSubmit}
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

export default Register;
