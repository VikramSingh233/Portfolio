// ContactForm.jsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';
// import toast from 'react-hot-toast';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactReason: 'professional'
  });
  const [sending, setSending] = useState(false)
  const handleSubmit = async (e:unknown) => {

    (e as Event).preventDefault();
    setSending(true);
    const response = await axios.post('/api/user/contact', formData);
    if(response.data.error){
    
    // toast.error(response.data.error)
    }
    else{setSending(false)}
    
    
    
    setFormData({
      name: '',
      email: '',
      message: '',
      contactReason: 'professional'
    });
  };

  

  return (
    <div className="max-w-5xl mx-auto p-16 xs:p-4 bg-gary-200 rounded-lg shadow-md mb-3">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Contact
          </label>
          <select
            id="contactReason"
            value={formData.contactReason}
            onChange={(e) => setFormData({ ...formData, contactReason: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="professional">Professional Opportunity</option>
            <option value="collaboration">Project Collaboration</option>
            <option value="question">General Question</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

    </div>
  );
};

export default ContactForm;