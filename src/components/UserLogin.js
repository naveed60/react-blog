import React, { useState } from 'react';

const UserLogin = ({ user, onLogin }) => {
  const handleLogin = () => {
    // TODO: Update user object and trigger login
    // You need to implement this part.
    onLogin();
  };

  return (
    <div>
      <h2>User Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};


 

export default UserLogin;
