import React, { useState } from 'react';
import './HealthForm.css';

function HealthForm({ onSave }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    birthDate: '',
    email: '',
    city: '',
    state: '',
    zipCode: '',
    medication: '',
    dosage: '',
    allergy: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert('Health data updated! (Note: This is a demo - data is not actually saved to files)');
  };

  return (
    <div className="form-container">
      <h2>Edit Health Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="NY"
                maxLength="2"
                required
              />
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="12345"
                maxLength="5"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Medication Information</h3>
          <div className="form-group">
            <label>Current Medication:</label>
            <input
              type="text"
              name="medication"
              value={formData.medication}
              onChange={handleChange}
              placeholder="e.g., Lisinopril 10mg"
            />
          </div>
          <div className="form-group">
            <label>Dosage Instructions:</label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="e.g., Take 1 tablet daily"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Allergy Information</h3>
          <div className="form-group">
            <label>Known Allergies:</label>
            <input
              type="text"
              name="allergy"
              value={formData.allergy}
              onChange={handleChange}
              placeholder="e.g., Penicillin, or 'No known allergies'"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Save Health Information
        </button>
      </form>
    </div>
  );
}

export default HealthForm;