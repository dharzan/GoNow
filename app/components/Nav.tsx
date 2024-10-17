"use client";
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Styled components
const StyledNav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem><NavLink href="/">Home</NavLink></NavItem>
        <NavItem><NavLink href="/profile">Profile</NavLink></NavItem>
        <NavItem><NavLink href="/settings">Settings</NavLink></NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
