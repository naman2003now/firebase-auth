import "./App.css";
import Registration from "./components/registration";
import Login from "./components/login";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { axios } from "axios";

function App() {
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    const response = await axios.get({
      url: "localhost:6969/",
    });
    console.log(response);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <Registration />
      <Login />
      <h1> You are {user ? user.email : "Nobody"} </h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
