import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/VolunteerForm.css'; 

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/v1/payment/sendemail', {
        email: formData.email,
      });

      setSubmitted(true);
      setEmailSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      toast.success('Thank you for your interest in volunteering! We will be in touch soon.');
    } catch (error) {
      console.error('Error submitting form or sending email:', error);
      toast.error('There was an error processing your request. Please try again.');
    }
  };

  return (
    <div className="volunteer-form-container">
      <h2 className="form-heading">Volunteer for Blood Donation Drives</h2>
      <form onSubmit={handleSubmit} className="volunteer-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {submitted && <p className="success-message">Thank you for your interest! We will be in touch soon.</p>}
        {emailSent && <p className="email-message">A confirmation email has been sent to {formData.email}.</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default VolunteerForm;

