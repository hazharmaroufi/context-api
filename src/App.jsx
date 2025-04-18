import UsersPage from "./components/UsersPage";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <UsersPage />
    </UserProvider>
  );
}

export default App;
