import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({children}) => {


    const initialState = {
        allNews : [{"source": {
            "id": null,
            "name": "Huffingtonpost.es"
            },
            "author": "Redacción HuffPost",
            "title": "El súper submarino español que nació de las acusaciones de plagio con Francia",
            "description": "<![CDATA[<p>La Armada Española puede presumir del S81 Isaac Peral, el primer submarino de la clase S-80, la cual no ha estado exenta de polémica desde que se optara por la fabricación del primero de esta clase dadas las acusaciones de plagio de Francia con el…",
            "url": "https://www.huffingtonpost.es/sociedad/el-super-submarino-espanol-nacio-acusaciones-plagio-francia.html",
            "urlToImage": "https://img.huffingtonpost.es/files/og_thumbnail/uploads/2024/04/06/el-submarino-s-81-isaac-peral-en-cartagena.jpeg",
            "publishedAt": "2024-04-06T14:20:43Z",
            "content": "La Armada Española puede presumir del S81 Isaac Peral, el primer submarino de la clase S-80, la cual no ha estado exenta de polémica desde que se optara por la fabricación del primero de esta clase d… [+2221 chars]"
            }],
            
    }


    const [state, dispatch] = useReducer(NewsReducer, initialState)


    return(
        <NewsContext.Provider value={{...state, newsDispatch : dispatch}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext;