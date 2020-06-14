import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Talents from "./IndexSections/Talents.js";

import { Provider } from "../../src/context.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <Provider>
        <DemoNavbar />

        <main ref="main">
          <Hero />
          <Talents />
        </main>
        <CardsFooter />
      </Provider>
    );
  }
}

export default Index;
