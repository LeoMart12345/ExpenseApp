import React from 'react';
import './App.css';
import './Components/login.css'
import FormComponent from './Components/FormComponent.jsx';
import DisplayComponent from './Components/DisplayComponent.jsx';
import ExpenseTable from './Components/ExpenseTable';
import EmployeeTable from './Components/EmployeeTable'; // Import EmployeeTable component
import CategoryTable from './Components/CategoryTable'; // Import CategoryTable component
import { UserProfileProvider } from './Components/UserProfileContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <h2 className='profile-container'>User Profile Manager</h2>

      <UserProfileProvider>
        <QueryClientProvider client={queryClient}>
          <FormComponent />
          <DisplayComponent />
          <ExpenseTable /> {/* Display Expense data */}
          <EmployeeTable /> {/* Display Employee data */}
          <CategoryTable /> {/* Display Category data */}
        </QueryClientProvider>
      </UserProfileProvider>
    </div>
  );
};

export default App;
