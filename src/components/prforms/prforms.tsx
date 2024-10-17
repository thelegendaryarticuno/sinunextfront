import React, { useState } from "react";

const PRForm: React.FC = () => {
  const [formData, setFormData] = useState({
    clientFirstName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhone: "",
    clientCity: "",
    clientHealthComplication: "",
    clientSex: "",
    clientUniversity: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="clientFirstName"
          value={formData.clientFirstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="clientLastName"
          value={formData.clientLastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="clientEmail"
          value={formData.clientEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="clientPhone"
          value={formData.clientPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="clientCity"
          value={formData.clientCity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Health Complication (optional):</label>
        <input
          type="text"
          name="clientHealthComplication"
          value={formData.clientHealthComplication}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sex:</label>
        <input
          type="text"
          name="clientSex"
          value={formData.clientSex}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>University:</label>
        <input
          type="text"
          name="clientUniversity"
          value={formData.clientUniversity}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PRForm;
