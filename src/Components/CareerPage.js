import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';


function CareersPage() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Careers at Our Company</h1>
      </header>
      <nav className="nav-bar">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
      </nav>
      <main className="App-content">
        <section className="JobListing">
          <h2>Job Title 1</h2>
          <p>Description of Job 1.</p>
          <button onClick={toggleForm}>Apply Now</button>
          {showForm && <ApplicationForm onClose={toggleForm} />}
        </section>
        <section className="JobListing">
          <h2>Job Title 1</h2>
          <p>Description of Job 1.</p>
          <button onClick={toggleForm}>Apply Now</button>
          {showForm && <ApplicationForm onClose={toggleForm} />}
        </section>
        <section className="JobListing">
          <h2>Job Title 1</h2>
          <p>Description of Job 1.</p>
          <button onClick={toggleForm}>Apply Now</button>
          {showForm && <ApplicationForm onClose={toggleForm} />}
        </section>
      </main>
      <footer className="App-footer">
        <p>Contact us at careers@company.com</p>
      </footer>
    </div>
  );
}

export default CareersPage;