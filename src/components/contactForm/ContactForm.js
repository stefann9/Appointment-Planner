import React from "react";

export const ContactForm = ({ currentName, setCurrentName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        placeholder="Phone: 000-000-0000"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
