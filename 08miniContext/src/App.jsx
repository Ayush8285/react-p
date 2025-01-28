import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/profile";


function App() {
  return (
    <UserContextProvider>
      <h1>hello, how are u</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
