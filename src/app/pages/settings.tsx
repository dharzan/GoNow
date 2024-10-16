import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Settings: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Settings</h1>
        <p>Update your preferences here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
