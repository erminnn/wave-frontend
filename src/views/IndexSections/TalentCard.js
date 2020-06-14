import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, Button, Container, Row, Col } from "reactstrap";
class TalentCard extends Component {
  state = {
    firstname: "Ermin",
    lastname: "Omeragic",
    language: ["English"],
    country: "Bosnia and Herzegovina",
    voice_age: "Young Adult",
    voice_sample_url: "assets/img/mus.mp3",
    voice_sample_name: "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
    user_img: "assets/img/theme/team-4-800x800.jpg",
  };

  render() {
    const {
      firstname,
      languages,
      lastname,
      voiceTypes,
      country,
      intonations,
      voice_sample_name,
      voice_sample_url,
      user_img,
    } = this.props.talent;

    return (
      <Container>
        <Card className="border mb-2">
          <Row>
            <Col lg="3" md="6">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg mt-2 mx-auto d-block"
                src={require("assets/img/theme/team-4-800x800.jpg")}
                style={{ width: "150px", height: "150px" }}
              />
            </Col>
            <Col className="mt-4 mt-md-0" lg="3" sm="6">
              <h4>
                <small className="d-block text-uppercase text-center font-weight-bold mb-2 mt-1">
                  {firstname + " " + lastname}
                </small>
              </h4>

              <small className="d-block text-primary text-center mb-2">
                <i className="fa fa-globe" aria-hidden="true"></i>
                {languages.map((language) => " " + language.name + " ")}
              </small>
              <small className="d-block text-primary text-center mb-2">
                <i className="fa fa-microphone" aria-hidden="true"></i>
                {intonations.map((intonation) => " " + intonation.type + " ")}
              </small>
            </Col>
            <Col className="mt-4 mt-md-0" lg="3" sm="6">
              <div className="mt-4 d-flex justify-content-center">
                <ReactAudioPlayer
                  src={require("assets/img/mus.mp3")}
                  controls
                />
              </div>
              <small className="d-block text-uppercase font-weight-bold text-center mb-4 mt-1 text-primary">
                {voice_sample_name}
              </small>
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

export default TalentCard;
