// UserProfileContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation


// Create the context
export const UserProfileContext = createContext();

// Create a provider component
export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '' });

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Declare PropTypes to validate 'children' prop
UserProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
