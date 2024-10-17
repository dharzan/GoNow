"use client"
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Header />
      <main>
        <h1>Profile</h1>
        {user ? (
          <div>
            <p>Welcome, {user}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
