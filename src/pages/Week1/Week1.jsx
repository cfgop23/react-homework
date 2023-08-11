import { useState } from "react";
import Toggle from "../../components/Toggle/Toggle";
import "./Week1.css";

function Week1() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <main>
      <h1>React 1주차 과제</h1>
      <article>
        <h2>Toggle</h2>
        <Toggle isActive={isActive} onClick={handleToggle} />
      </article>
    </main>
  );
}

export default Week1;
