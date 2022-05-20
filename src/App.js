import "./App.css";
import divider from "./images/pattern-divider-desktop.svg";
import iconDice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  }

  useEffect(() => {
    getAdvice().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className={"main-body"}>
      <div className={"main-card"}>
        <div className={"advice-header"}>
          <h3>ADVICE #{id}</h3>
        </div>
        <div className={"advice-content"}>
          <p>"{advice}"</p>
        </div>
        <div className={"advice-footer"}>
          <img src={divider} alt="Divider on desktop" />
        </div>
        <div className={"advice-button"}>
          <button onClick={getAdvice}>
            <img src={iconDice} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
