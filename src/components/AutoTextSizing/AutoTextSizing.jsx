import React, { useState, useEffect, useRef } from 'react';

const AutoTextSize = ({
    children,
    maxFontSize = 100,
    minFontSize = 10,
    className = '',
}) => {
    const [fontSize, setFontSize] = useState(maxFontSize);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            setContainerWidth(parentRect.width);
            setContainerHeight(parentRect.height);
        }
    }, [parentRef]);

    useEffect(() => {
        const textWidth = document.getElementById('auto-text-size-text').offsetWidth;
        const textHeight = document.getElementById('auto-text-size-text').offsetHeight;
        let newFontSize = fontSize;

        if (textWidth > containerWidth || textHeight > containerHeight) {
            newFontSize = Math.max(fontSize - 1, minFontSize);
        } else if (textWidth < containerWidth && textHeight < containerHeight) {
            newFontSize = Math.min(fontSize + 1, maxFontSize);
        }

        setFontSize(newFontSize);
    }, [fontSize, containerWidth, containerHeight]);

    return (
        <div
            ref={parentRef}
            className={`${className} auto-text-size-container`}
            style={{ fontSize: `${fontSize}px` }}
        >
            <div id="auto-text-size-text">{children}</div>
        </div>
    );
};
export default AutoTextSize;


// import React, { useState, useEffect } from 'react';

// const AutoTextSize = ({
//     children,
//     maxFontSize = 100,
//     minFontSize = 10,
//     className = '',
// }) => {
//     const [fontSize, setFontSize] = useState(maxFontSize);
//     const [containerWidth, setContainerWidth] = useState(0);
//     const [containerHeight, setContainerHeight] = useState(0);

//     useEffect(() => {
//         const container = document.getElementById('auto-text-size-container');
//         setContainerWidth(container.offsetWidth);
//         setContainerHeight(container.offsetHeight);
//     }, []);

//     useEffect(() => {
//         const textWidth = document.getElementById('auto-text-size-text').offsetWidth;
//         const textHeight = document.getElementById('auto-text-size-text').offsetHeight;
//         let newFontSize = fontSize;

//         if (textWidth > containerWidth || textHeight > containerHeight) {
//             // If the text is too large, decrease the font size
//             newFontSize = Math.max(fontSize - 1, minFontSize);
//         } else if (textWidth < containerWidth && textHeight < containerHeight) {
//             // If the text is too small, increase the font size
//             newFontSize = Math.min(fontSize + 1, maxFontSize);
//         }

//         setFontSize(newFontSize);
//     }, [fontSize, containerWidth, containerHeight]);

//     return (
//         <div
//             id="auto-text-size-container"
//             className={`${className} auto-text-size-container`}
//             style={{ fontSize: `${fontSize}px` }}
//         >
//             <div id="auto-text-size-text">{children}</div>
//         </div>
//     );
// };

// export default AutoTextSize;