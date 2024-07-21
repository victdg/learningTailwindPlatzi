import { useState } from "react";

function App() {
  console.log("version 1");
  const [pressedTimes, setPressedTimes] = useState(0);
  const [blackColor, setBlackColor] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const increases = () => setPressedTimes(pressedTimes + 1);
  const decreases = () => setPressedTimes(pressedTimes - 1);

  const toggle = () => {
    console.log("toggled");
    setBlackColor(!blackColor);
    setButtonDisabled(!buttonDisabled);
  };
  const color = blackColor ? "bg-gray-500" : "bg-gray-300";

  return (
    <div className="mx-auto mt-2 w-threeFourths border text-center">
      <p>Button pressed {pressedTimes} times</p>

      <div className="mx-auto mb-2">
        <button
          className={
            buttonDisabled ? "btn-crease-disabled" : "btn-crease-enabled"
          }
          disabled={buttonDisabled}
          onClick={decreases}
        >
          Decreases
        </button>

        <button
          className={color + " rounded-sm text-white mx-1 px-1"}
          onClick={toggle}
        >
          {buttonDisabled ? "Enable buttons" : "Disable buttons"}
        </button>

        <button
          className={
            buttonDisabled ? "btn-crease-disabled" : "btn-crease-enabled"
          }
          disabled={buttonDisabled}
          onClick={increases}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
