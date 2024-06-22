
// import { Textfit } from "react-textfit";
// import { AutoTextSize } from "auto-text-size";
import AutoTextSize from "../AutoTextSizing/AutoTextSizing.jsx";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        <AutoTextSize
            className="screen"
            maxFontSize="50"
            minFontSize="12"
        >
            {value}
        </AutoTextSize >

    )
};

export default Screen;
