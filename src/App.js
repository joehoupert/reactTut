import { useState } from "react";

function Square() {
  //null is initial val
  const [val, setValue] = useState(null);

  function handleClick() {
    setValue("X");
    //console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {val}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
