import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TalentCard from "./TalentCard";
import TalentFilter from "./TalentFilter";
import { Consumer } from "../../context.js";
class Talents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { talents } = value;
          return (
            <>
              <Row>
                <TalentFilter />
              </Row>
              <Row>
                <Col>
                  {talents.map((talent) => (
                    <TalentCard key={talent.id} talent={talent} />
                  ))}
                </Col>
              </Row>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Talents;
