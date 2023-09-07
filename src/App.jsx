import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  return (
    <>
      <h1> Formulaire d`Inscription </h1>
      <SignupForm />
      <ToastContainer />;
    </>
  );
}

export default App;
