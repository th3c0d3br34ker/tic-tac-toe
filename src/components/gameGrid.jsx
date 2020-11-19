import GameCell from "./gameCell.jsx";
import styled from "styled-components";
import { useThemeValue } from "../context/themeContext.js";

const GameGridWrapper = styled.div`
  background-color: ${(porps) => porps.backgroundColor};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 40px;
  max-width: fit-content;
  user-select: none;
`;

const GameGrid = ({ board, onClick }) => {
  const { theme } = useThemeValue();

  return (
    <GameGridWrapper backgroundColor={theme.gridColor}>
      {board.map((cell, i) => (
        <GameCell key={i} id={i} value={cell} onClick={() => onClick(i)} />
      ))}
    </GameGridWrapper>
  );
};

export default GameGrid;
