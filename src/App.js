import "./App.css";
import ConfirmDialog from "./ConfirmDialog";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <div className="App">
      <main>
        <RegisterForm />
        <ConfirmDialog />
      </main>
    </div>
  );
  function RegisterForm() {
    return <div>
      <h1>Please, register</h1>
    </div>;
  }
}

export default App;
