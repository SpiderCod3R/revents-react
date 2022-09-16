/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../components/events/eventDashboard/eventsDashboard';
import EventDetailedPage from '../../components/events/eventDetailed/eventDetailedpage';
import EventForm from '../../components/events/eventForm/eventForm';
import HomePage from '../../components/home/HomePage';
import NavBar from '../../components/navgation/navBar';

function App() {
  /* <Fragment> same to <></> */
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

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
}

export default App;
