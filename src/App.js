import "./App.css";
import Toggle from "./component/Toggle";
import { useState } from "react";

function App() {
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  return (
    <div className="App">
      <Toggle toggled={toggled} onClick={handleClick} />
    </div>
  );
}

export default App;
