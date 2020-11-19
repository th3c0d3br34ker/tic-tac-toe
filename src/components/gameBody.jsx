import GameGrid from "./gameGrid";
import ResetButton from "./buttons";
import styled from "styled-components";
import { useThemeValue } from "../context/themeContext";

const GameContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  margin: 40px;
  padding: 20px;
  border-radius: 25px;
  margin-bottom: 70px;
  position: absolute;
  max-width: fit-content;
  max-height: fit-content;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 900;
  font-family: Roboto;
  color: ${(props) => props.color};
`;

const TacWrapper = styled.span`
  color: ${(props) => props.color};
`;

const GameBodyWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  font-family: sans-serif;
  justify-content: center;
  transition: all 0.6s ease;
`;

const StyledLine = styled.div`
  background-color: ${(props) => props.color};
  margin: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 2px;
`;

const GameBody = ({ board, xIsNext, resetGame, winner, handleClick }) => {
  const { theme } = useThemeValue();
  return (
    <GameBodyWrapper backgroundColor={theme.backgroundColor}>
      <GameContainer backgroundColor={theme.boadBackgroundColor}>
        <Heading color={theme.xColor}>
          Tic <TacWrapper color={theme.oColor}>Tac</TacWrapper> Toe
        </Heading>

        <StyledLine color={theme.backgroundColor} />

        <div className="text-center row justify-content-around">
          <h1 className="m-0 p-2">
            {winner ? null : "Next player: " + (xIsNext ? "X" : "O")}
          </h1>

          <ResetButton reset={resetGame} winner={winner} />
        </div>

        <StyledLine color={theme.backgroundColor} />

        <GameGrid board={board} onClick={handleClick} />
      </GameContainer>
    </GameBodyWrapper>
  );
};

export default GameBody;
