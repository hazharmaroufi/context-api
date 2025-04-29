import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
function Search() {
  const { allUsers, setUsers } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    if (search.length === 0) {
      setUsers(allUsers);
      return;
    }
    const searchedUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
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
