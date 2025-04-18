import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Hazhar" },
    { id: 2, name: "Pavan" },
    { id: 3, name: "Darin" },
  ]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
