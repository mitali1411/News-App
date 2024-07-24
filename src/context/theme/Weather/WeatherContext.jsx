import { createContext, useReducer } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    // Initial State
    const initialState = {
        WeatherData : null
    }

    // Reducer
    const WeatherReducer = (state, action) => {
        switch(action.type){
            case "GET_WEATHER": 
                return{
                    ...state,
                    WeatherData : action.payload
                }            
        }

    }


    const [state, dispatch] = useReducer(WeatherReducer, initialState)



    return(
        <WeatherContext.Provider value={{...state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}


export default WeatherContext;