// import Screen from "./components/screen/screen";
// import Wrapper from "./components/wrapper/wrapper";
// import Button from "./components/Button/Button";
// import ButtonBox from "./components/ButtonBox/ButtonBox";

import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Screen from "./components/Screen/Screen.jsx";
import Button from "./components/Button/Button.jsx";
import ButtonBox from "./components/ButtonBox/ButtonBox.jsx";
import { useSelector, useDispatch } from "react-redux";

import btnValues from "./utils/buttonArray.js";
import {
  clearNumber,
  currentNumber,
  emptyNumber,
} from "./feature/number/numberSlice.jsx";
import { calculateAnswer } from "./utils/calculatorLogic.js";
import { useState } from "react";

const App = () => {
  const number = useSelector(state => state.number.value);
  let isOperator = ["( )", "%", "/", "*", "-", "+", "."];
  const [firstClicked, setFirstClicked] = useState(true);
  const dispatch = useDispatch();

  function transformExp(expression) {
    const result = [];
    let temp = "";
    for (let char of expression) {
      if (!isNaN(char)) {
        temp += char;
      } else {
        if (temp !== "") {
          result.push(temp);
          temp = "";
        }
        result.push(char);
      }
    }
    if (temp !== "") {
      result.push(temp);
    }
    return result;
  }

  const handleButtonClick = btn => {
    // Clear console
    if (btn === "C") {
      setFirstClicked(true);
      return dispatch(clearNumber());
    }
    // Evaluate expression
    if (btn === "=") {
      const res = calculateAnswer(transformExp(number));
      if (isNaN(res)) {
        dispatch(clearNumber());
        return dispatch(currentNumber("Invalid Expression"));
      }
      dispatch(clearNumber());
      dispatch(currentNumber(Number(res).toPrecision(4)));
      setFirstClicked(true);
      return;
    }
    // Any other number pressed
    else {
      if (firstClicked) {
        setFirstClicked(false);
        dispatch(emptyNumber());
      }
      return dispatch(
        currentNumber(!isOperator.includes(btn) ? Number(btn) : btn)
      );
    }
  };
  return (
    <Wrapper>
      <Screen value={number} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => handleButtonClick(btn)}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
