import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Edit() {
  const {
    editedName,
    setEditedName,
    editedPhone,
    setEditedPhone,
    users,
    setUsers,
    resetFields,
    selectedUserId,
  } = useContext(UserContext);
  const updateHandler = () => {
    setUsers(
      users.map((user) => {
        if (user.id === selectedUserId) {
          return { ...user, name: editedName, phone: editedPhone };
        }
        return user;
      })
    );
    resetFields();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="new name"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <input
        type="text"
        placeholder="new phone"
        value={editedPhone}
        onChange={(e) => setEditedPhone(e.target.value)}
      />
      <button onClick={updateHandler}>Update</button>
    </div>
  );
}

export default Edit;
