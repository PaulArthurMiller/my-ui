import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user-profile'); // Assume this endpoint gives user info
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <div>Loading user information...</div>; // Placeholder until user data is loaded
  }

  return (
    <div className="container">
      <Sidebar user={user} />
      <Chat />
    </div>
  );
}

export default App;
