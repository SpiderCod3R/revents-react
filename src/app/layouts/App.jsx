import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../components/events/eventDashboard/eventsDashboard';
import NavBar from '../../components/navgation/navBar';

function App() {
  /* <Fragment> same to <></> */
  const [formOpen, setFormOpen] = useState(false);
  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </Fragment>
  );
}

export default App;
