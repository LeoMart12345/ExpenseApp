//DisplayComponent
import './Login.css';
import React, { useContext } from 'react';
import { UserProfileContext } from './UserProfileContext'; //import context file

const DisplayComponent = () => {
  const { profile } = useContext(UserProfileContext); //access profile information from context file

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
};

export default DisplayComponent;
