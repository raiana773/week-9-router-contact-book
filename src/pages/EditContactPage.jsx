import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditContactPage({ editContact, contacts }) {
  const params = useParams();
  console.log(params);
  const initContact = contacts.find((item) => item.id == params.id);
  const [contact, setContact] = useState(initContact);
  const navigate = useNavigate();

  function handleChange(e) {
    const obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !contact.name.trim() ||
      !contact.surname.trim() ||
      !contact.phoneNumber.trim()
    ) {
      alert("Fill the fields");
      return;
    }

    editContact(contact);
    setContact({
      name: "",
      surname: "",
      phoneNumber: "",
    });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange(e)}
        value={contact.name}
        type="text"
        name="name"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={contact.surname}
        type="text"
        name="surname"
      />

      <input
        onChange={(e) => handleChange(e)}
        value={contact.phoneNumber}
        type="text"
        name="phoneNumber"
      />
      <button>submit</button>
    </form>
  );
}

export default EditContactPage;
