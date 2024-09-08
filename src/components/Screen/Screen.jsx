import { useContext } from "react";
import { CalculatorContext } from "../../context/calculatorContext.jsx";
import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
    const { calc } = useContext(CalculatorContext);

    return (
        <Textfit className="screen" max={70} mode="single">{calc?.num ? calc?.num : calc?.res}</Textfit>
    )
};

export default Screen;
