const getClassName = (btn) => {
    const classNames = {
        "=": "equals",
        "+": "operator",
        "x": "operator",
        "-": "operator",
        "/": "operator",
        "C": "clear"
    }
    return classNames[btn]
}

const Button = ({ value, onClick }) => {
    return (
        <button className={`${getClassName(value)} button`
        } onClick={onClick} >
            {value}
        </button >
    );
};

export default Button;