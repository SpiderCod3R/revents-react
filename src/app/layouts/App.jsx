import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../components/events/eventsDashboard";
import NavBar from "../../components/navgation/navBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
