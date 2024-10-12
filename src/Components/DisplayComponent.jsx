// DisplayComponent.jsx
import React, { useContext } from 'react';
import { UserProfileContext } from './UserProfileContext'; // Import the context

const DisplayComponent = () => {
  const { profile } = useContext(UserProfileContext); // Access the profile data from context

  return (
    <div>
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
};

export default DisplayComponent;
