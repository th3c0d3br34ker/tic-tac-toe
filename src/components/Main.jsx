import { Fragment, useEffect, useState } from "react";
import { ThemeProvider, useThemeValue } from "../context/themeContext";

import GameBody from "./gameBody";
import ThemeBar from "./themeBar";
import Winner from "./winner";
import { calculateWinner } from "./util";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [isDraw, setDraw] = useState(false);
  const { theme } = useThemeValue();

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
    if (!winner && board.indexOf(null) === -1) {
      setDraw(true);
    }
  }, [winner, board, isDraw]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDraw(true);
  };

  console.log(theme);

  return (
    <ThemeProvider>
      <Fragment>
        <GameBody
          board={board}
          xIsNext={xIsNext}
          resetGame={resetGame}
          winner={winner}
          handleClick={handleClick}
        />

        <Winner winner={winner} isDraw={isDraw} reset={resetGame} />

        <ThemeBar />
      </Fragment>
    </ThemeProvider>
  );
};

export default Game;
