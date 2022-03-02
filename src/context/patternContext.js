import { useState, createContext  } from "react";
import patternInitialState from './patternInitialState';

export const PatternContext = createContext(patternInitialState);

function ContextProvider(props) {

const [selectedPattern, setSelectedPattern] = useState('');

const value = {selectedPattern, setSelectedPattern};

    return (
        <PatternContext.Provider value={value}>
            {props.children}
        </PatternContext.Provider>
    );
};

export default ContextProvider
