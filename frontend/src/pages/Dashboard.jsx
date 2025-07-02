// frontend/src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Tracker from '../components/Tracker';

const logout = () => {
  // Clear session data (adjust as needed for your app)
  localStorage.clear();
  sessionStorage.clear();
  // Optionally, redirect to login page:
  // window.location.href = '/login';
  window.location.reload();
};

const buttonStyle = {
  position: 'absolute',
  top: 20,
  right: 30,
  background: '#44e610',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '8px 18px',
  fontSize: '16px',
  cursor: 'pointer',
};

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from backend API
    fetch('/api/user/profile')
      .then((res) => res.json())
      .then((data) => setUsername(data.username))
      .catch(() => setUsername('User'));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <button style={buttonStyle} onClick={logout}>Logout</button>
      <h2 style={{ marginTop: 20, marginBottom: 10 }}>
        {username ? `Welcome ${username}` : 'Welcome'}
      </h2>
      <Tracker />
    </div>
  );
};

export default Dashboard;