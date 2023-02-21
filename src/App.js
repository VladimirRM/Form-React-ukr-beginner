import "./App.css";
import ConfirmDialog from "./ConfirmDialog";
import RegisterForm from "./RegisterForm";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <main>
        <RegisterForm />
      </main>
      <ConfirmDialog />
    </div>
  );
  function RegisterForm() {
    const [user, setUserData] = useState({ email: "", password: "" });

    const setUserEmail = (e) => {
      const email = e.target.value;
      setUserData({
        ...user.email,
      });
    };
    const setUserPassword = (e) => {
      const password = e.target.value;
      setUserData({
        ...user.password
      });
    };

    return (
      <div>
        <h1>Please, register</h1>
        <form onSubmit={console.log("done")}>
          <input
            name="email"
            label="label"
            type="email"
            onChange={setUserEmail}
            value={user.email}
            required={true}
          />
          <input
            name="pwd"
            label="password"
            type="password"
            onChange={setUserPassword}
            value={user.password}
            required={true}
          />
          <button>Submit</button>
          {JSON.stringify(user)}
        </form>
      </div>
    );
  }
}

export default App;
