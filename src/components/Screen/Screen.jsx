
// import { Textfit } from "react-textfit";
import { AutoTextSize } from "auto-text-size";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        <AutoTextSize
            className="screen"
            mode="box"
            minFontSizePx={14}
            maxFontSizePx={70}
        >
            {value}
        </AutoTextSize >

    )
};

export default Screen;