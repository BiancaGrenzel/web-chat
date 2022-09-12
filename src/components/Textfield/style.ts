import styled from "styled-components";
import * as theme from "../../styles/tokens/index";
import InputMask from "react-input-mask";
import { ErrorMessage } from "formik";

export const Input = styled.input`
  border: 0px;
  background: ${theme.blue.light};
  border-radius: 4px 0px 0px 4px;
  height: 40px;
  width: 216px;
  margin-right: 40px;
  color: ${theme.black.dark};
  &:disabled {
    background-color: transparent;
    color: ${theme.black.dark};
  }
  &:focus {
    outline: none;
  }
`;

interface InputMaskProps {
  isOnError?: boolean;
}

export const InputMaskStyled = styled(InputMask)<InputMaskProps>`
  border: 0px;
  background: ${theme.blue.light};
  border-radius: 4px 0px 0px 4px;
  height: 40px;
  /* min-width: 216px; */
  width: 225px;
  margin-right: 40px;
  color: ${theme.black.dark};
  border: ${(props: InputMaskProps) =>
    props.isOnError ? `1px solid ${theme.pink.neon}` : "none"};
  &:disabled {
    background-color: transparent;
    color: ${theme.black.dark};
    margin-left: -10px;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 670px) {
    width: 100%;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: ${theme.pink.neon};
`;
