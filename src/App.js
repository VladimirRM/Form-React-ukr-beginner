import "./App.css";
import ConfirmDialog from "./ConfirmDialog";
import RegisterForm from "./RegisterForm";
import React,{useState} from "react";

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


    const [user,setUserData]=useState({email:'', password:''})

    const setUserEmail = ()=>{
      
    }
    const setUserPassword = ()=>{

    }
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
        </form>
      </div>
    );
  }
}

export default App;
