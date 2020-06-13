import React, {useState, useRef, useEffect} from "react"
import {useHistory} from "react-router-dom";
import axios from "axios"


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let history = useHistory();
  let ref = useRef("main")

  function goHome() {
    history.push("/");
  }

/*
  useEffect(() => {
    setErrorMsg("")
  });
*/

  /*componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }*/
  /*constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }*/

  let handleSubmit = async (event) => {
        console.log(username, password);
        event.preventDefault();

        try {
          let response = await axios.post('http://127.0.0.1:8080/auth', {
            "username": username,
            "password": password
          });
          console.log(response)
          setErrorMsg("")
          goHome();
        } catch (e) {
          console.error(e);
          setErrorMsg("Invalid credentials")
        }
      };

/*  let handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };*/

  return (
      <>
        <DemoNavbar/>
        <main ref={ref}>
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h1>Sign in</h1>
                      </div>
                      <div className="text-center text-danger"> {errorMsg}</div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form"
                            onSubmit={handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83"/>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Email"
                                name="email"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open"/>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                autoComplete="off"
                                value= {password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                          />
                          <label
                              className="custom-control-label"
                              htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                              className="my-4"
                              color="primary"
                              type="submit"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                          className="text-light"
                          href={"#"}
                          onClick={(e) => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right"
                         xs="6">
                      <a
                          className="text-light"
                          href={"#pablo"}
                          onClick={(e) => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter/>
      </>
  );
}

export default Login;
