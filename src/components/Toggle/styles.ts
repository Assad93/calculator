import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

export const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  z-index: 100;

  @media screen and (min-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CheckBox = styled.input`
  opacity: 0;

  &:checked + label > div {
    transform: translateX(24px);
  }
`;

export const Wrapper = styled.label`
  align-items: center;
  background-color: #111;
  border-radius: 50px;
  display: flex;
  height: 26px;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  width: 50px;
`;

export const SunIcon = styled(FaSun)``;

export const MoonIcon = styled(FaMoon)``;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;
