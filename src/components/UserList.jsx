import { useContext } from "react";

import { UserContext } from "../context/UserContext";

function UserList() {
  const {
    users,
    setUsers,
    editedName,
    editedPhone,
    name,
    setName,
    phone,
    setPhone,
    setEditedName,
    setEditedPhone,
    resetFields,
    setSelectedUserId,
  } = useContext(UserContext);
  const editHandler = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditedName(userToEdit.name);
      setEditedPhone(userToEdit.phone);
      setSelectedUserId(id);
    }
  };
  const deleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    resetFields();
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} <span>{user.phone}</span>
          <button onClick={() => editHandler(user.id)}>edit</button>
          <button onClick={() => deleteHandler(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
