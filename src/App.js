import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';
import HealthForm from './HealthForm';
import patientData from './my-patient-data.json';
import medicationData from './my-medications.json';
import allergyData from './my-allergies.json';

function App() {
  const [showQR, setShowQR] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // QR code uses your computer's IP address so phones can access it
  const qrDataString = `http://10.0.0.177:3001/patient.html?id=123`;

  const handleFormSave = (formData) => {
    console.log('Form data submitted:', formData);
    // In a real app, this would save to a database or update the JSON files
    // For now, we just log it
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Health Data</h1>
        <p>Patient-Controlled Health Records Prototype</p>
        <div className="button-group">
          <button 
            className="qr-button"
            onClick={() => setShowQR(!showQR)}
          >
            {showQR ? 'Hide QR Code' : 'Generate QR Code'}
          </button>
          <button 
            className="qr-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Edit Health Data'}
          </button>
        </div>
      </header>

      <div className="content">
        {/* Edit Form */}
        {showForm && (
          <HealthForm onSave={handleFormSave} />
        )}

        {/* QR Code Section */}
        {showQR && (
          <section className="card qr-card">
            <h2>Share Your Health Data</h2>
            <p>Scan this QR code to access your health information:</p>
            <div className="qr-container">
              <QRCodeSVG 
                value={qrDataString}
                size={300}
                level="L"
                includeMargin={true}
              />
            </div>
            <p className="qr-note">
              Note: This QR code contains a link to your health data. Only share with trusted healthcare providers.
            </p>
          </section>
        )}

        {/* Patient Information */}
        <section className="card">
          <h2>Patient Information</h2>
          <p><strong>Name:</strong> {patientData.name[0].given[0]} {patientData.name[0].family}</p>
          <p><strong>Gender:</strong> {patientData.gender}</p>
          <p><strong>Date of Birth:</strong> {patientData.birthDate}</p>
          <p><strong>Email:</strong> {patientData.telecom[0].value}</p>
          <p><strong>Address:</strong> {patientData.address[0].city}, {patientData.address[0].state} {patientData.address[0].postalCode}</p>
        </section>

        {/* Medications */}
        <section className="card">
          <h2>Current Medications</h2>
          <p><strong>Medication:</strong> {medicationData.medicationCodeableConcept.text}</p>
          <p><strong>Dosage:</strong> {medicationData.dosage[0].text}</p>
          <p><strong>Status:</strong> {medicationData.status}</p>
        </section>

        {/* Allergies */}
        <section className="card">
          <h2>Allergies</h2>
          <p><strong>Allergy:</strong> {allergyData.code.text}</p>
          <p><strong>Status:</strong> {allergyData.clinicalStatus.coding[0].code}</p>
        </section>
      </div>
    </div>
  );
}

export default App;