import React, { useState } from "react";
import MainRoutes from "./components/routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [contacts, setContacts] = useState([]);

  console.log(contacts);

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }

  function deleteContact(id) {
    const filtered = contacts.filter((item) => item.id !== id);

    setContacts(filtered);
  }

  function editContact(contactEdited) {
    const newArr = contacts.map((item) => {
      if (item.id === contactEdited.id) {
        return contactEdited;
      } else {
        return item;
      }
    });
    setContacts(newArr);
  }

  return (
    <MainRoutes
      editContact={editContact}
      deleteContact={deleteContact}
      contacts={contacts}
      addContact={addContact}
    />
  );
}

export default App;
