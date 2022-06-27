import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState } from "react";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
      <h2>REGISTER USER</h2>
      <label htmlFor="email">Username: </label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="register-email"
        value={email}
        style={{ width: "50%", margin: "1%" }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="register-password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        style={{ width: "50%", margin: "1%" }}
      />
      <input
        type="button"
        id="register-submit"
        value="Submit"
        style={{ width: "50%" }}
        onClick={register}
      />
    </form>
  );
}

export default Registration;
