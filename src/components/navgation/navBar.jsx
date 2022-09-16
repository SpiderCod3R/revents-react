/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignInMenu from './signInMenu';
import SignOutMenu from './signOutMenu';

export default function NavBar() {
  const HISTORY = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  let handleSignOut = () => {
    setAuthenticated(false);
    HISTORY.push('/');
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="LOGO" style={{ marginRight: '15px' }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/events/CreateEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignInMenu signOut={handleSignOut} />
        ) : (
          <SignOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
