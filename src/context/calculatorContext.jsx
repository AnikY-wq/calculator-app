import { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    const providerValue = {
        calc, setCalc
    }
    return (
        <CalculatorContext.Provider value={providerValue}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider