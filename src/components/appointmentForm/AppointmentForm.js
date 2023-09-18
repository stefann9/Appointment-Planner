import React from "react";
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
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
      <input
        type="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <ContactPicker name="contact" contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} />
      <button type="submit" >Submit</button>
    </form>
  );
};
