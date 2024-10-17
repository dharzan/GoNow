"use client"
import React from 'react';
import Link from 'next/link';
import Nav from './Nav';


const Header: React.FC = () => {
  return (
    <header className="header">
      <Nav></Nav>
    </header>
  );
};

export default Header;
