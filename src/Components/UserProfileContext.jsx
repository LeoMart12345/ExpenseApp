//UserProfileContext

import { createContext, useState } from 'react';

//create a context to hold the user information across all platforms
export const UserProfileContext = createContext();

//define a provider component to wrap around parts of the app that need access to the user profile
export const UserProfileProvider = ({ children }) => {
  //holds the user’s profile information name, email, and bio
  const [profile, setProfile] = useState({ name: '', email: '', bio: '' });

  //return the context provider
  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};