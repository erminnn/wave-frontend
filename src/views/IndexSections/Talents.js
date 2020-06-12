import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, Button, Container, Row, Col, Label } from "reactstrap";
import TalentCard from "./TalentCard";
import TalentFilter from "./TalentFilter";
class Talents extends Component {
  state = {
    talents: [],
  };

  render() {
    const {
      firstname,
      language,
      lastname,
      country,
      voice_age,
      voice_sample_name,
      voice_sample_url,
      user_img,
    } = this.state;
    return (
      <Card className="border border-primary mb-2">
        <Row>
          <TalentFilter />
        </Row>
        <Row>
          <Col>
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Talents;
