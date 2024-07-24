import { createContext, useReducer } from "react";

const ThemeContext = createContext()

// Provider
export const ThemeProvider = ({children}) => {


    // Initial State for Reducer
    const initialState = {
        theme : false,
    }


    // ThemeReducer
    const ThemeReducer = (state, action)=> {
        switch(action.type){
            case "CHANGE_THEME" :
                return{
                    ...state,
                    theme : state.theme ? false : true,
                }
        }

    }

    // State
    const [state, dispatch] = useReducer(ThemeReducer, initialState);


    return(
        <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}




export default ThemeContext;