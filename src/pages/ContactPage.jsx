import React, { useState } from 'react';
import './ContactPage.css';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle form submission, e.g., sending the data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };
  
  <Navbar />
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Feel free to reach out to us. We're here to help.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <span>Email:</span> developer@javascriptcom
          </div>
          <div className="contact-item">
            <span>Phone:</span> +65 Y00000
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
