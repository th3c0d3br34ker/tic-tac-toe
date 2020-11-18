const Winner = ({ winner, reset }) => {
  return (
    <div className="winner" hidden={!winner} onClick={reset}>
      <h3>Winner: {winner}</h3>
    </div>
  );
};

export default Winner;
