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
import { evaluatePostfix } from "./utils/calculatorLogic.js";
import { useState } from "react";

const App = () => {
  const number = useSelector(state => state.number.value);
  let isOperator = ["( )", "%", "/", "*", "-", "+", "."];
  const [firstClicked, setFirstClicked] = useState(true);
  const dispatch = useDispatch();
  const handleButtonClick = btn => {
    if (btn === "C") {
      setFirstClicked(true);
      return dispatch(clearNumber());
    }
    if (btn === "=") {
      const res = evaluatePostfix(number);
      return dispatch(currentNumber(Number(res)));
    } else {
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
