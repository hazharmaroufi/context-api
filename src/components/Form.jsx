import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

function Form() {
  const { setUsers, setAllUsers, name, setName, phone, setPhone, resetFields } =
    useContext(UserContext);

  const addHandler = () => {
    if (name.length <= 2) {
      alert("Name must be longer than 2 characters");
      return;
    }
    if (phone.length < 11 || phone.length >= 12) {
      // document.querySelector(".error").textContent =
      //   "Phone must be 11 characters";
      alert("Phone must be 11 characters");
      return;
    }
    const newUser = { id: Math.floor(Math.random() * 10000), name, phone };
    setAllUsers((prev) => [...prev, newUser]);
    setUsers((prev) => [...prev, newUser]);
    resetFields();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addHandler}>add</button>
    </div>
  );
}

export default Form;
