import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentName,
  setCurrentName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => contacts.map((contact) => contact.name), [contacts]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        placeholder="Appointment Name"
        required
      />
      <input
        type="date"
        name="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <ContactPicker
        name="contact"
        contactNames={contactNames}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">Add new appointment</button>
    </form>
  );
};
