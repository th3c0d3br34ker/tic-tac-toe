import styled from "styled-components";
import { useThemeValue } from "../context/themeContext";

const GameCellWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 118px;
  width: 118px;
  cursor: pointer;
  color: transparent;
`;

const ValueWrapper = styled.span`
  font-size: 112px;
  color: ${(props) => props.color};
`;

const GameCell = ({ id, onClick, value }) => {
  const { theme } = useThemeValue();

  const color = value === "X" ? theme.xColor : theme.oColor;

  return (
    <GameCellWrapper
      onClick={onClick}
      id={id}
      backgroundColor={theme.boadBackgroundColor}
    >
      <ValueWrapper className="size150" color={color}>
        {value}
      </ValueWrapper>
    </GameCellWrapper>
  );
};

export default GameCell;
