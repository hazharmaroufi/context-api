import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const resetFields = () => {
    setName("");
    setPhone("");
    setEditedName("");
    setEditedPhone("");
    setSelectedUserId(null);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        editedName,
        setEditedName,
        editedPhone,
        setEditedPhone,
        name,
        setName,
        phone,
        setPhone,
        resetFields,
        selectedUserId,
        setSelectedUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
