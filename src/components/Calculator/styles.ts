import styled from "styled-components";

interface IButton {
  calcType?: "secondary" | "operations";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 768px;
  position: relative;
  margin: 0 auto;
`;

export const Display = styled.div`
  align-items: flex-end;
  background: ${({ theme }) => theme.display};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: end;
  padding: 5px 10px;
  position: relative;
`;

export const Historic = styled.span`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const Result = styled.span`
  color: ${({ theme }) => theme.text.primary};
  font-size: 64px;
  font-weight: bold;
  height: 70px;

  @media screen and (min-width: 1024px) {
    height: 100px;
    font-size: 96px;
  }
`;

export const ButtonsWrapper = styled.div`
  background: ${({ theme }) => theme.buttonsWrapper};
  display: grid;
  flex: 2;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

export const Button = styled.button<IButton>`
  align-items: center;
  cursor: pointer;
  background: ${({ theme, calcType }) => {
    if (calcType === "secondary") {
      return theme.button.secondary;
    } else if (calcType === "operations") {
      return theme.button.operations;
    } else {
      return theme.button.primary;
    }
  }};
  border: none;
  border-radius: 9px;
  color: ${({ theme, calcType }) =>
    calcType === "operations" ? "#EAEBED" : theme.text.primary};
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;

  &:hover {
    opacity: 0.5;
  }
`;
