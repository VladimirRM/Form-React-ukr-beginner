import "./App.css";
import ConfirmDialog from "./ConfirmDialog";
import RegisterForm from "./RegisterForm";

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
    return (
      <div>
        <h1>Please, register</h1>
        <form onSubmit={console.log("done")}>
          <input
            name="email"
            label="label"
            type="email"
            onChange={console.log()}
            required={true}
          />
          <input
            name="pwd"
            label="password"
            type="password"
            onChange={console.log()}
            required={true}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
