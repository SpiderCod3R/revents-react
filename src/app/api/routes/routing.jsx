import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../../components/events/eventDashboard/eventsDashboard';
import EventDetailedPage from '../../../components/events/eventDetailed/eventDetailedpage';
import EventForm from '../../../components/events/eventForm/eventForm';
import HomePage from '../../../components/home/HomePage';
import NavBar from '../../../components/navgation/navBar';

const ROUTER = ({ handleCreateFormOpen }) => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/events/CreateEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default ROUTER;
