/* eslint-disable no-unused-vars */
import cuid from 'cuid';
import React from 'react';
import { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent }) {
  let initialValues = selectedEvent ?? {
    title: '',
    category: '',
    city: '',
    venue: '',
    date: '',
  };

  let [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: 'SpiderCod3R',
      attendees: [],
      hostPhotoURL: 'assets/user.png',
    });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content="Create new Event" />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event Title"
            name="title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button onClick={() => setFormOpen(false)} type="submit" floated="left" content="Cancel" />
      </Form>
    </Segment>
  );
}
