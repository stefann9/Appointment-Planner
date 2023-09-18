import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleAddContact }) => {
  const [currentName, setCurrentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicateCheck === false) {
      handleAddContact(currentName, phone, email);
      setCurrentName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    setDuplicateCheck(contacts.some((contact) => contact.name === currentName));
  }, [currentName, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          currentName={currentName}
          setCurrentName={setCurrentName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
