
// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        // <Textfit className="screen" mode="single" max={70}>
        //     {value}
        // </Textfit>

        <div className="screen" mode="single" max={70}>
            {value}
        </div>


        // <AutoTextSize
        //     className="screen"
        //     maxSize={70} // equivalent to max={70}
        //     minSize={14} // optional, default is 14
        // >
        //     {value}
        // </AutoTextSize>
    )
};

export default Screen;