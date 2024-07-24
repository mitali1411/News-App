import React, { useContext, useEffect } from 'react'
import QuoteContext from '../context/quote/QuoteContext'
import { fetchQuote } from '../context/quote/QuoteAction';

const QuoteComponent = () => {

    const {quoteData, dispatch} = useContext(QuoteContext);

    const getQuote = async() => {
        const data = await fetchQuote();
        // console.log(data)
        dispatch({
            type : 'GET_QUOTE',
            payload : data,
        })
    }

    useEffect(()=>{
        getQuote()
    }, []);

    if(!quoteData){
        return <h3 className='display-6'>Loading...</h3>
    }

  return (
    <marquee behavior="" direction="left">
    <h3 className='display-6'>{quoteData.content} - {quoteData.author}</h3>
    </marquee>
  )
}

export default QuoteComponent