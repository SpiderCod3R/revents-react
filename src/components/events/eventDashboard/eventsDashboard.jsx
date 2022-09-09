import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/eventForm';
import EventList from './eventList';

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
