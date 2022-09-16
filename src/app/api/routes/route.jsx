import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import EventDashboard from '../../../components/events/eventDashboard/eventsDashboard';
import EventDetailedPage from '../../../components/events/eventDetailed/eventDetailedpage';
import EventForm from '../../../components/events/eventForm/eventForm';
import HomePage from '../../../components/home/HomePage';

import App from '../../layouts/App';

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/events',
        element: <EventDashboard />,
      },
      {
        path: '/events/:id',
        element: <EventDetailedPage />,
      },
      {
        path: '/events/CreateEvent',
        element: <EventForm />,
      },
    ],
  },
]);

export default ROUTER;
