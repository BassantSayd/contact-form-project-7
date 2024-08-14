import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="query-type">
          <label>
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              checked={formData.queryType === 'General Enquiry'}
              onChange={handleChange}
              required
            />
            General Enquiry
          </label>
          <label>
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              checked={formData.queryType === 'Support Request'}
              onChange={handleChange}
              required
            />
            Support Request
          </label>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I consent to being contacted by the team
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default App;