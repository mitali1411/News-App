import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({children}) => {

    const initialState = {
        quoteData : [{
            "content": "You have to do your own growing no matter how tall your grandfather was.",
            "author": "Abraham Lincoln",
        }],
    };


    const [state, dispatch] = useReducer(QuoteReducer, initialState);

    return(
        <QuoteContext.Provider value={{...state, dispatch}}>
            {children}
        </QuoteContext.Provider>
    );
};

export default QuoteContext;