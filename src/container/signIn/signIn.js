// SignupForm.js

import React, { useState } from 'react';
import './signIn.css'; // Import the SignupForm specific CSS

const SignInForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    // For password matching validation
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }
    // Perform further form submission logic
  };

  return (
    <div className="signup-container">
    <h2 className="signup-header">SignIn</h2>
    <form className="signup-form" onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
     
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};

export default SignInForm;
