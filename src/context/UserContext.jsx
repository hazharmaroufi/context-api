import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]); // Store all users
  const [users, setUsers] = useState([]); // Store filtered users
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
        allUsers,
        setAllUsers,
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
