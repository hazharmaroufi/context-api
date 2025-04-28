import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
function Search() {
  const { users, setUsers } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    if (search.length === 0) {
      setUsers(users);
      return;
    }
    const allUsers = [...users];
    const searchedUsers = allUsers.filter((user) => user.name.includes(search));
    setUsers(searchedUsers);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default Search;
