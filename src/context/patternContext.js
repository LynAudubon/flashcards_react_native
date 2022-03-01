import { useState, createContext  } from "react";

export const PatternContext = createContext();

function ContextProvider(props) {

const [selectedPattern, setSelectedPattern] = useState('');
const value = {selectedPattern, setSelectedPattern};

    return (
        <PatternContext.Provider value={value}>
            {children}
        </PatternContext.Provider>
    );
};

export default ContextProvider
