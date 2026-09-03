import "./App.css";
import LoginDisplay from "./components/LoginDisplay";
import LoginToggleButton from "./components/LoginToggleButton";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
        <h1>React-useContext-AuthApp</h1>
        <LoginProvider>
          <div>
            <LoginDisplay />
            <LoginToggleButton />
          </div>
        </LoginProvider>
      </div>
    </>
  );
}

export default App;
