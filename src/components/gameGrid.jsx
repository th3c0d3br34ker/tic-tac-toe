import GameCell from "./gameCell.jsx";

const GameGrid = ({ board, onClick }) => {
  return (
    <div className="game-grid">
      {board.map((cell, i) => (
        <GameCell key={i} id={i} value={cell} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default GameGrid;
