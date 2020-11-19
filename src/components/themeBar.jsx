import styled, { css } from "styled-components";

import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";

const ThemeWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 40px;
  font-size: 50px;
  transition: all 0.8s ease;
  z-index: 2;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;

const ThemeBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeWrapper onClick={toggleTheme} color={theme.iconColor}>
      <i className={theme.fontAwesomeClass}></i>
    </ThemeWrapper>
  );
};

export default ThemeBar;
