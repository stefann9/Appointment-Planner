import React from "react";

export const ContactPicker = ({ contactNames, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="" default>
        No Contact Selected
      </option>
      {contactNames.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
