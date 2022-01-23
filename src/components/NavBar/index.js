import React from 'react';

import { Nav, NavLink, Bars, NavMenu } from '../../style/navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../images/logo.png')} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activestyle="true">
            <p>Главная</p>
          </NavLink>
          <NavLink to="/plan" activestyle="true">
            <p>План занятий</p>
          </NavLink>
          <NavLink to="/theory" activestyle="true">
            <p>Теория</p>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
