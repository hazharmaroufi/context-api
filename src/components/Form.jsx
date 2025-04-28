import { useContext } from "react";

import { UserContext } from "../context/UserContext";

function Form() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  const { users, setUsers, name, setName, phone, setPhone, resetFields } =
    useContext(UserContext);

  const addHandler = () => {
    setUsers((users) => [
      ...users,
      { id: Math.floor(Math.random() * 10000), name: name, phone: phone },
    ]);
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
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addHandler}>add</button>
    </div>
  );
}

export default Form;
