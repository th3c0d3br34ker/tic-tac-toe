// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";

import { Fragment, useEffect, useState } from "react";

import GameGrid from "./gameGrid";
import StartButton from "./buttons";
import Winner from "./winner";
import { calculateWinner } from "./util";

const GameBody = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  useEffect(() => {
    if (winner) {
      console.log("Winner: ", winner);
    }
  }, [winner]);

  const resetGame = () => {
    console.log("called!");
    setBoard(Array(9).fill(null));
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">
          <strong>
            Tic <span className="text-white">Tac</span> Toe
          </strong>
        </h1>
        <hr />
        <div className="text-center row justify-content-around">
          <h1 className="m-0 p-2">
            {winner ? null : "Next player: " + (xIsNext ? "X" : "O")}
          </h1>

          <StartButton reset={resetGame} winner={winner} />
        </div>
        <hr />
        <GameGrid board={board} onClick={handleClick} />
      </div>
      <Winner winner={winner} reset={resetGame} />
    </Fragment>
  );
};

export default GameBody;
