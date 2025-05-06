import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    editedName: yup
      .string()
      .required("name required")
      .min(2, "at least 2 characters"),
    editedPhone: yup
      .string()
      .required("phone number required")
      .matches(/^\d+$/, "phone  must be digits")
      .length(11, "must be 11 numbers"),
  })
  .required();

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // const editedName = data.name;
    // const editedPhone = data.phone;
    const updatedUser = { name: data.editedName, phone: data.editedPhone };
    setUsers(
      users.map((user) => {
        if (user.id === selectedUserId) {
          return { ...user, name: data.editedName, phone: data.editedPhone };
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder={editedName}
          {...register("editedName")}
          value={watch(editedName)}
        />
        <span>{errors.editedName?.message}</span>
        <br />
        <input
          placeholder={editedPhone}
          {...register("editedPhone")}
          value={watch(editedPhone)}
        />
        <span>{errors.editedPhone?.message}</span>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Edit;
