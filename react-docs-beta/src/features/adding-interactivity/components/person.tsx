import { useState, ChangeEvent } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={($event) => handleLastNameChange($event)}
        />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
