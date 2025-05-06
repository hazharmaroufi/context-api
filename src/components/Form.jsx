import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("name required")
      .min(2, "at least 2 characters"),
    phone: yup
      .string()
      .required("phone number required")
      .matches(/^\d+$/, "phone  must be digits")
      .length(11, "must be 11 numbers"),
  })
  .required();

import { UserContext } from "../context/UserContext";

function Form() {
  const { setUsers, setAllUsers, name, setName, phone, setPhone, resetFields } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let name = data.name;
    let phone = data.phone;
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name,
      phone,
    };
    setAllUsers((prev) => [...prev, newUser]);
    setUsers((prev) => [...prev, newUser]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <span>{errors.name?.message}</span>
        <br />
        <input placeholder="Phone" {...register("phone")} />
        <span>{errors.phone?.message}</span>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
