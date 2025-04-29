import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Edit({ onClose }) {
  const {
    editedName,
    setEditedName,
    editedPhone,
    setEditedPhone,
    users,
    setUsers,
    allUsers,
    setAllUsers,
    resetFields,
    selectedUserId,
  } = useContext(UserContext);
  const updateHandler = () => {
    if (editedName.length <= 2) {
      alert("Name must be longer than 2 characters");
      return;
    }
    if (editedPhone.length < 11 || editedPhone.length >= 12) {
      alert("Phone must be 11 characters");
      return;
    }

    const updatedUser = { name: editedName, phone: editedPhone };
    setUsers(
      users.map((user) => {
        if (user.id === selectedUserId) {
          return { ...user, name: editedName, phone: editedPhone };
        }
        return user;
      })
    );
    setAllUsers(
      allUsers.map((user) => {
        if (user.id === selectedUserId) {
          return { ...user, ...updatedUser };
        }
        return user;
      })
    );
    resetFields();
    onClose();
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
