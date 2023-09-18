import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        placeholder="Contact Name"
        required
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        placeholder="Contact Phone: ###-###-####"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Contact Email"
        required
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
};
