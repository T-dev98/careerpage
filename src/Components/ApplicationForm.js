import React, { useState } from 'react';


function ApplicationForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    // and close the form
    alert('submitted Successfully')
    onClose();
    
  };

  return (
    <div className="Overlay">
      <div className="FormContainer">
        <h2>Apply for the Job</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          <input type="file"accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
