import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      setError("Name is required");
      return;
    }

    if (formData.name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (formData.email === "") {
      setError("Email is required");
      return;
    }

    if (formData.phone === "") {
      setError("Phone number is required");
      return;
    }

    alert(
      `Form Submitted Successfully 
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`
    );

    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div className="contact-container">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Contact;