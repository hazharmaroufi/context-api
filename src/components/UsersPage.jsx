// import Edit from "./Edit";
import Form from "./Form";
import Search from "./Search";
import UserList from "./UserList";

function UsersPage() {
  return (
    <div>
      <h1>Contact List</h1>
      <Search />
      <Form />
      {/* <Edit /> */}
      <UserList />
    </div>
  );
}

export default UsersPage;
