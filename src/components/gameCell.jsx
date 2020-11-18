const GameCell = ({ id, onClick, value }) => {
  const className = `game-cell ${
    value === null ? null : value === "X" ? "x" : "o"
  }`;

  return (
    <div className={className} onClick={onClick} id={id}>
      <span className="size150">{value}</span>
    </div>
  );
};

export default GameCell;
