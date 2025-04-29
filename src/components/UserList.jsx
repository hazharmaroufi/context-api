import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

import PopUp from "./Popup";
import Edit from "./Edit";

function UserList() {
  const [selected, setSelected] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const {
    users,
    setUsers,
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
      setShowPopUp(true);
    }
  };
  const closePopUpHandler = () => {
    setShowPopUp(false);
    resetFields();
  };
  const deleteHandler = (id) => {
    const userToDelete = users.find((user) => user.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${userToDelete.name}?`)
    ) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
      resetFields();
    }
  };
  const deleteselectedHandler = () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selected.length} selected users?`
      )
    ) {
      const newUsersAfterWholeDelete = users.filter(
        (user) => !selected.includes(user.id)
      );
      setUsers(newUsersAfterWholeDelete);
    }
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
      {selected.length > 0 && (
        <button onClick={() => deleteselectedHandler()}>delete selected</button>
      )}

      <PopUp showPopUp={showPopUp} closePopUp={closePopUpHandler}>
        <Edit onClose={closePopUpHandler} />
      </PopUp>
    </div>
  );
}

export default UserList;
