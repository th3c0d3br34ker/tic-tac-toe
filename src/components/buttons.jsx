const StartButton = ({ reset, winner }) => {
  return (
    <button
      disabled={winner}
      className="m-2 p-2"
      onClick={reset}
      variant="secondary"
    >
      RESET
    </button>
  );
};

export default StartButton;
