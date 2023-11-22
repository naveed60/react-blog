import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: '',
    profilePicture: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);

    // Show form data in an alert
    alert(
      `Form Data:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Contact: ${formData.contact}
      Address: ${formData.address}
      Profile Picture URL: ${formData.profilePicture}`
    );

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      address: '',
      profilePicture: '',
    });
  };

  return (
    <div className="card shadow border-0 px-2 mt-5 w-50 mx-auto mb-5">
      <h2 className="mb-4">Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label for="formFile" class="form-label">Small file input example</label>
          <input class="form-control form-control" id="formFile" type="file"/>
        </div>
           <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
