import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    //if you're taken (ie !NULL), don't get took
    if (squares[i] || detWinner(squares)) return;

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // nextSquares[i] = "X";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = detWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    // status = "Next player: " + (xIsNext ? "X" : "O");
    status = (xIsNext ? "X" : "O") + "'s turn";
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function detWinner(squares) {
  const checks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //acrosses
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //downz
    [0, 4, 8],
    [2, 4, 6], //goofy ones
  ];

  for (let i = 0; i < checks.length; i++) {
    const [a, b, c] = checks[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
