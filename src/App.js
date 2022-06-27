import "./App.css";
import Registration from "./components/registration";
import Login from "./components/login";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [secret, setSecret] = useState("");
  onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  const getSecret = async () => {
    const response = await axios.get("http://localhost:6969/", {
      headers: { Authorization: "Bearer " + user.accessToken },
    });
    console.log(response);
    setSecret(response.data[0].secret);
  };
  return (
    <div className="App">
      <Registration />
      <Login />
      <h1> You are {user ? user.email : "Nobody"} </h1>
      <button onClick={logout}>Sign Out</button>
      <button onClick={getSecret}>Secret</button>
      <p>{secret}</p>
    </div>
  );
}

export default App;
