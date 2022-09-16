import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} end to="/" header>
          <img src="/assets/logo.png" alt="LOGO" style={{ marginRight: '15px' }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item as={NavLink} end to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/events/CreateEvent">
          <Button positive inverted content="Create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button basic inverted content="Register" style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
