/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './eventList';

import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // Formato padrao de criar função
  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  // Formato de criar função como Arrow Function
  let handleUpdateEvent = (updatedEvent) => {
    setEvents(events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)));
  };

  let handleDeleteEvent = (eventID) => {
    setEvents(events.filter((evt) => evt.id != eventID));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>EVENT FILTERS</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
