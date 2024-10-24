//FormComponent

import React, { useState, useContext } from 'react';
import { UserProfileContext } from './UserProfileContext'; //imports the context file

const FormComponent = () => {
  const { setProfile } = useContext(UserProfileContext); //gets the profile information from contect file
  const [formData, setFormData] = useState({ name: '', email: '', bio: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, //applies inputted value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData); //saves the data from the form to the context file
    setFormData({ name: '', email: '', bio: '' }); //makes form blank after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bio: </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Save Data</button>
    </form>
  );
};

export default FormComponent;