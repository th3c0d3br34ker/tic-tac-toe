import styled from "styled-components";

const WinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.show ? `none` : `grid`)};
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  & > h3 {
    color: white;
    font-size: 80px;
    user-select: none;
  }
`;

const Winner = ({ winner, reset, isDraw }) => {
  const show = !winner;

  if (isDraw) {
    console.log("Dwaw");
  }

  return (
    <WinnerWrapper show={show} onClick={reset}>
      <h3>Winner: {winner}</h3>
    </WinnerWrapper>
  );
};

export default Winner;
