import { useState } from "react";

function App() {
  const [pressedTimes, setPressedTimes] = useState(0);
  const click = () => setPressedTimes(pressedTimes + 1);

  return (
    <>
      <p className="bg-yellow-300">Hello vic, button pressed {pressedTimes}</p>
      <button className="bg-slate-300 rounded-sm text-white" onClick={click}>
        Click Me!
      </button>
    </>
  );
}

export default App;
