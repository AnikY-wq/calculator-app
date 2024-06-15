// import Screen from "./components/screen/screen";
// import Wrapper from "./components/wrapper/wrapper";
// import Button from "./components/Button/Button";
// import ButtonBox from "./components/ButtonBox/ButtonBox";

import Wrapper from "./components/Wrapper/Wrapper.jsx"
import Screen from "./components/Screen/Screen.jsx"
import Button from "./components/Button/Button.jsx";
import ButtonBox from "./components/ButtonBox/ButtonBox.jsx";

import btnValues from "./utils/buttonArray.js";

const App = () => {
    return (
        <Wrapper>
            <Screen value="0" />
            <ButtonBox>

                {
                    btnValues.flat().map((btn, i) => {
                        return (
                            <Button
                                key={i}
                                className={btn === "=" ? "equals" : ""}
                                value={btn}
                                onClick={() => {
                                    console.log(`${btn} clicked!`);
                                }}
                            />
                        )
                    })
                }
            </ButtonBox>
        </Wrapper>
    );
};

export default App;