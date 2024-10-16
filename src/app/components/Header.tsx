import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
