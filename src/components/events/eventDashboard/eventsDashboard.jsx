/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/eventForm';
import EventList from './eventList';

import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({ formOpen, setFormOpen, selectEvent, selectedEvent }) => {
  const [events, setEvents] = useState(sampleData);

  // Formato padrao de criar função
  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  // Formato de criar função como Arrow Function
  let handleUpdateEvent = (updatedEvent) => {
    setEvents(events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)));
    selectEvent(null);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            updateEvent={handleUpdateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
