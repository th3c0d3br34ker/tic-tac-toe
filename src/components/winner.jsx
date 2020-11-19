const Winner = ({ winner, reset, isDraw }) => {
  const hidden = !winner;

  console.log("Winner", hidden);

  return (
    <div className="winner" hidden={hidden} onClick={reset}>
      <h3>Winner: {winner}</h3>
    </div>
  );
};

export default Winner;
