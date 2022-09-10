import { useState } from "react";

interface IHistoric {
  lastOperand: string | null;
  operation: string | null;
  currentOperand: string | null;
}

const initialState: IHistoric = {
  lastOperand: null,
  operation: null,
  currentOperand: null,
};

const useCalc = () => {
  const [historic, setHistoric] = useState(initialState);

  const addDigit = (digit: string) => {
    if (!historic.currentOperand) {
      if (digit === ".") return;
      setHistoric({ ...historic, currentOperand: digit });
    } else {
      const currentOperand = historic.currentOperand;
      if (digit === "." && currentOperand.includes(".")) return;
      setHistoric({ ...historic, currentOperand: currentOperand + digit });
    }
  };

  const addOperation = (operation: string) => {
    setHistoric({
      lastOperand: historic.currentOperand,
      operation,
      currentOperand: null,
    });
  };

  const backspace = () => {
    const currentOperand = historic.currentOperand ?? "";
    setHistoric({
      ...historic,
      currentOperand: currentOperand.substring(0, currentOperand.length - 1),
    });
  };

  const calc = () => {
    if (historic.currentOperand && historic.lastOperand && historic.operation) {
      const currOperand = Number(historic.currentOperand);
      const lastOperand = Number(historic.lastOperand);

      let result = 0;

      switch (historic.operation) {
        case "+":
          result = lastOperand + currOperand;
          break;
        case "-":
          result = lastOperand - currOperand;
          break;
        case "*":
          result = lastOperand * currOperand;
          break;
        case "/":
          result = lastOperand / currOperand;
          break;
      }

      format(result);
    } else {
      setHistoric({
        currentOperand: String(historic.currentOperand ?? historic.lastOperand),
        lastOperand: null,
        operation: null,
      });
    }
  };

  const erase = () => {
    setHistoric({
      currentOperand: null,
      lastOperand: null,
      operation: null,
    });
  };

  const format = (number: number) => {
    const [, decimal] = String(number).split(".");
    if (decimal === undefined) {
      setHistoric({
        currentOperand: String(number),
        lastOperand: null,
        operation: null,
      });
    } else {
      setHistoric({
        currentOperand: String(number.toFixed(2)),
        lastOperand: null,
        operation: null,
      });
    }
  };

  const percentage = () => {
    const currOperand = Number(historic.currentOperand);

    setHistoric({
      ...historic,
      currentOperand: `${(currOperand / 100).toFixed(2)}`,
    });
  };

  const signalReverse = () => {
    const currOperand = Number(historic.currentOperand);

    setHistoric({
      ...historic,
      currentOperand: `${currOperand * -1}`,
    });
  };

  return {
    historic,
    addDigit,
    addOperation,
    backspace,
    calc,
    erase,
    percentage,
    signalReverse,
  };
};

export default useCalc;
