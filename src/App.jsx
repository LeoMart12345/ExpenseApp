import './App.css';
import React from 'react';
import FormComponent from './Components/FormComponent.jsx';  //import the 3 componeents for fucntionality
import DisplayComponent from './Components/DisplayComponent.jsx'; 
import { UserProfileProvider } from './Components/UserProfileContext';

const App = () => {
  return (
    <div className="App">
      <h1>User Profile Manager</h1>
      
      {/* wrap components with UserProfileProvider */}
      <UserProfileProvider>
        <FormComponent />   {/* form to enter the user information */}
        <DisplayComponent /> {/* display the saved data information */}
      </UserProfileProvider>
    </div>
  );
};

export default App;