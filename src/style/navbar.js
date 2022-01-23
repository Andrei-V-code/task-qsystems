/* eslint-disable no-undef */
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #343a40;
  height: 130px;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((50vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  colof: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  margin: 0 15px;
  cursor: pointer;

  & {
    color: #9a9da0;
  }

  &.active {
    color: #fff;
  }

  p {
    font-size: 35px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0.05em;
  }
`;

export const Bars = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
