import React, { useState } from "react";

export const FormComponent = ({ onCompletion }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onCompletion === 'function') {
      onCompletion(formData);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center h-full mt-10 w-6/12 m-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Step # 2</h2>
      <h3 className="text-2xl font-bold mb-4">Details</h3>
      <h5 className="text-1xl text-gray-500">
        We're thrilled at the opportunity to help you grow your business online.{" "}
      </h5>
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          aria-label="Name"
          placeholder="Your Name"
          className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex w-full mb-4">
        <div className="flex-1 mr-2">
          <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            aria-label="Email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="phone" className="text-sm font-semibold mb-1">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            aria-label="Phone Number"
            placeholder="Your Phone Number"
            className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="additional-info" className="text-sm font-semibold mb-1">Anything else you'd like to share?</label>
        <textarea 
          id="additional-info" 
          name="additionalInfo" 
          value={formData.additionalInfo} 
          onChange={handleChange} 
          aria-label="Additional Information"
          placeholder="Anything else you'd like to share?"
          rows="4"
          className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 mb-4">
        Send Request
      </button>
      <span className="text-1xl text-gray-500">
      <i className="fa fa-lock mx-2" />
        We promise never to share your information or spam your inbox.
      </span>
    </form>
  );
};
