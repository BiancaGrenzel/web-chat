import styled from "styled-components";
import * as theme from "../../styles/tokens/index";
import { Style } from "../../types/style";
import { InputContainerProps } from "./types";

export const Container = styled.div<Style>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  max-height: ${(props) => (props.height ? props.height : "auto")};
  gap: ${(props) => (props.gap ? props.gap : "8px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : theme.white.light};
  padding: ${(props) => (props.padding ? props.padding : "16px 32px")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "initial"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "initial"};
  display: ${(props) => (props.display ? props.display : "flex")};
  overflow-y: ${(props) => (props.overflowY ? props.overflowY : "")};
  overflow-x: ${(props) => (props.overflowX ? props.overflowX : "")};
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
  @media (max-width: 1160px) {
    width: ${(props) => (props.tabletWidth ? props.tabletWidth : "auto")};
  }
  @media (max-width: 670px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "auto")};
    padding: 8px;
    margin: 8px;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${(props) =>
    props.isClient === true ? theme.blue.medium : theme.blue.light};
  border-radius: ${(props) =>
    props.isClient === true ? "16px 0px 16px 16px" : "0px 16px 16px 16px"};
  border: 0px;
  display: flex;
  padding: 16px;
  height: auto;
  position: relative;
  @media (max-width: 670px) {
    padding: 8px;
    margin: 8px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  margin-right: 48px;
  margin-top: calc(16px + 26.5px );
  border: 0px;
  height: 42px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 8px 8px 0px;
  background-color: ${theme.blue.light};
  color: ${theme.blue.neon};
  &:disabled {
    background-color: transparent;
    color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
  &:hover {
    background-color: #dce7ff;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 670px) {
    display: none;
  }
`;
