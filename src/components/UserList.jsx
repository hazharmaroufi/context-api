import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

function UserList() {
  const [selected, setSelected] = useState([]);
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
  const deleteselectedHandler = () => {
    console.log("delete");
    const newUsersAfterWholeDelete = users.filter(
      (user) => !selected.includes(user.id)
    );
    setUsers(newUsersAfterWholeDelete);
  };
  const changeHandler = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <input
            type="checkbox"
            id={user.id}
            name={user.name}
            value={user.name}
            onChange={() => changeHandler(user.id)}
          ></input>
          {user.name} <span>{user.phone}</span>
          <button onClick={() => editHandler(user.id)}>edit</button>
          <button onClick={() => deleteHandler(user.id)}>delete</button>
        </div>
      ))}
      <button onClick={() => deleteselectedHandler()}>delete selected</button>
    </div>
  );
}

export default UserList;
