"use client"
import { useAuth } from '../context/AuthContext'; // Adjust path if necessary

const Profile: React.FC = () => {

  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
