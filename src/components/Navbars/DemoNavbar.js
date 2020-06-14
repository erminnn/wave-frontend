/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  isAuthenticated() {
    return 'username' in localStorage;
  }

  getAuthNavs() {
    console.log(this.isAuthenticated())
    if(this.isAuthenticated()) {
      return (
      <NavItem>
        <span className="text-white">Welcome {localStorage.getItem("username")}</span>
      </NavItem>)
    }
    else {
      return (
          <>
            <NavItem>
              <NavLink to="/login-page" tag={Link}>
                Login <span className="sr-only">(current)</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register-page" tag={Link}>
                Register
              </NavLink>
            </NavItem>
          </>
      )
    }
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  getLogOut() {
    if(!this.isAuthenticated()) {
      return (<>
        <NavItem>
          <NavLink
              className="nav-link-icon"
              href="#"
              id="tooltip333589074"
              target="_blank"
          >
            <i className="fa fa-facebook-square" />
            <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip333589074">
            Like us on Facebook
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
              className="nav-link-icon"
              href="#"
              id="tooltip356693867"
              target="_blank"
          >
            <i className="fa fa-instagram" />
            <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip356693867">
            Follow us on Instagram
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
              className="nav-link-icon"
              href="#"
              id="tooltip184698705"
              target="_blank"
          >
            <i className="fa fa-twitter-square" />
            <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip184698705">
            Follow us on Twitter
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
              className="nav-link-icon"
              href="https://github.com/Kvark900"
              id="tooltip112445449"
              target="_blank"
          >
            <i className="fa fa-github" />
            <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip112445449">
            Star us on Github
          </UncontrolledTooltip>
        </NavItem>
        {/*<NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-cloud-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Download
                      </span>
                    </Button>
                  </NavItem>*/}
      </>)
    }
    else return (
        <NavItem>
          <a
              className="text-white"
              onClick={this.logout}
          >
            Log out
          </a>
        </NavItem>
    )
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/wave-text-logo-trans.png")}
                />

              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/wave-text-logo-trans.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {this.getAuthNavs()}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {this.getLogOut()}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          {/*<div hidden={false} className="alert alert-warning alert-dismissible fade show"
               role="alert">
            <strong>Holy guacamole!</strong>
            You should check in on some of those fields below.
            <button type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>*/}
        </header>
      </>
    );
  }
}

export default DemoNavbar;
