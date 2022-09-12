import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #aecefd4e;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
`;

export const Modal = styled.div`
  position: relative;
  width: auto;
  height: auto;
  min-width: 240px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  border-radius: 16px;
  padding: 32px;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 900;
`

export const Subtitle = styled.h3`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 700;
`

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 14px;
`
