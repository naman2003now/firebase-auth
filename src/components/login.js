import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5%",
      }}
    >
      <h2>LOGIN USER</h2>
      <label htmlFor="email">Username: </label>
      <input
        type="text"
        id="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        style={{ width: "50%", margin: "1%" }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        style={{ width: "50%", margin: "1%" }}
      />
      <input
        type="button"
        id="submit"
        value="Submit"
        style={{ width: "50%" }}
        onClick={login}
      />
    </form>
  );
}

export default Login;
