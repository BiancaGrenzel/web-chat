import styled from "styled-components";
import { ButtonProps } from "./types";
import * as theme from "../../styles/tokens/index";

type color = "success" | "warning" | "error" | "inherit";

const backgroundColor = (color: color) => {
  const colors = {
    success: theme.blue.neon,
    warning: theme.orange.medium,
    error: theme.orange.medium,
    inherit: theme.blue.light
  };

  return colors[color] || colors.success;
};

export const ButtonStyled = styled.button<ButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 16px 24px;
  background-color: ${(props) =>
    props.color && backgroundColor(props.color)};
  color: ${(props) => props.color === 'inherit' ? theme.black.medium : theme.white.light};
  border: 0px;
  border-radius: 8px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
