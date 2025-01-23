// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Import your CSS for styling

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Other Contact Methods</h2>
        <p>Email: AU@gym.com</p>
        <p>Phone:8096650681</p>
        <p>Address: Beside Konark Bakery oneway junction Amadalavalsa</p>
      </div>
    </div>
  );
};

export default Contact;