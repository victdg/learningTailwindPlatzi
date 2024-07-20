import { useState } from "react";

function App() {
  const [pressedTimes, setPressedTimes] = useState(0);
  const [blackColor, setBlackColor] = useState(false);
  const click = () => setPressedTimes(pressedTimes + 1);
  const toggle = () => {
    console.log("toggled");
    setBlackColor(!blackColor);
  };
  const color = blackColor ? "bg-slate-800" : "bg-slate-400";
  const pClass = color + " mx-auto mt-2 text-center";

  return (
    <div className="mx-auto mt-2 w-1/3 border text-center">
      <p>Button pressed {pressedTimes} times</p>

      <div className="mx-auto">
        <button
          className="bg-slate-400 rounded-sm text-white mx-1 px-1"
          onClick={click}
        >
          Click Me!
        </button>

        <button
          className={color + " rounded-sm text-white mx-1 px-1"}
          onClick={toggle}
        >
          Toggle color!
        </button>
      </div>
    </div>
  );
}

export default App;
