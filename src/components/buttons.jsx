import styled from "styled-components";
import { useThemeValue } from "../context/themeContext";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  outline: none;
  border: none;
  border-radius: 4px;
  margin: 8px 16px;
  padding: 8px 16px;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;

const ResetButton = ({ reset, winner }) => {
  const { theme } = useThemeValue();

  return (
    <StyledButton
      backgroundColor={theme.backgroundColor}
      color={theme.iconColor}
      disabled={winner}
      onClick={reset}
      variant="secondary"
    >
      RESET
    </StyledButton>
  );
};

export default ResetButton;
