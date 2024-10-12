
import './App.css'
import { UserProfileProvider } from './Components/UserProfileContext.jsx'; // Adjust the path based on your folder structure
import FormComponent from './Components/FormComponent.jsx'; // Adjust path if necessary
import DisplayComponent from './Components/DisplayComponent.jsx'; // Import the DisplayComponent


function App() {
  return (
    <div className="App">
      <UserProfileProvider>
        <h1>User Profile Manager</h1>
        <FormComponent />   {/* Form to input the data */}
        <DisplayComponent /> {/* Display the submitted data */}
      </UserProfileProvider>
    </div>
  );
}

export default App;