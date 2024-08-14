import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Semi from "./semi";
import "./App.css";
import Header from "./header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div style={{ position: "absolute", top: 0 }}>
        <Semi AboutMeid="aboutMe" />
      </div>
    </div>
  );
}

export default App;
