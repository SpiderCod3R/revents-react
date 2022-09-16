/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react';
import ROUTER from '../api/routes/routing';

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
    <Fragment>
      <ROUTER handleCreateFormOpen={handleCreateFormOpen} />
    </Fragment>
  );
}

export default App;
