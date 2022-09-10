import {
  Button,
  ButtonsWrapper,
  Container,
  Display,
  Historic,
  Result,
} from "./styles";
import { FaDivide, FaBackspace } from "react-icons/fa";
import useCalc from "hooks/useCalc";

const Calculator = () => {
  const {
    historic,
    addDigit,
    addOperation,
    backspace,
    calc,
    erase,
    percentage,
    signalReverse,
  } = useCalc();

  return (
    <Container>
      <Display>
        <Historic>
          {historic.lastOperand &&
            `${historic.lastOperand} ${historic.operation}`}
        </Historic>
        <Result>{historic.currentOperand}</Result>
      </Display>
      <ButtonsWrapper>
        <Button calcType="secondary" onClick={erase}>
          C
        </Button>
        <Button calcType="secondary" onClick={signalReverse}>
          +/-
        </Button>
        <Button calcType="secondary" onClick={percentage}>
          %
        </Button>
        <Button calcType="operations" onClick={() => addOperation("/")}>
          <FaDivide />
        </Button>
        <Button onClick={() => addDigit("7")}>7</Button>
        <Button onClick={() => addDigit("8")}>8</Button>
        <Button onClick={() => addDigit("9")}>9</Button>
        <Button calcType="operations" onClick={() => addOperation("*")}>
          x
        </Button>
        <Button onClick={() => addDigit("4")}>4</Button>
        <Button onClick={() => addDigit("5")}>5</Button>
        <Button onClick={() => addDigit("6")}>6</Button>
        <Button calcType="operations" onClick={() => addOperation("-")}>
          -
        </Button>
        <Button onClick={() => addDigit("1")}>1</Button>
        <Button onClick={() => addDigit("2")}>2</Button>
        <Button onClick={() => addDigit("3")}>3</Button>
        <Button calcType="operations" onClick={() => addOperation("+")}>
          +
        </Button>
        <Button onClick={() => addDigit(".")}>.</Button>
        <Button onClick={() => addDigit("0")}>0</Button>
        <Button onClick={backspace}>
          <FaBackspace />
        </Button>
        <Button calcType="operations" onClick={calc}>
          =
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default Calculator;
