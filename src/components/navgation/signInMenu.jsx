import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

export default function SignInMenu({ setAuthenticated }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="SpiderCod3R">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/events/CreateEvent" text="Create Event" icon="plus" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={() => setAuthenticated(false)} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
