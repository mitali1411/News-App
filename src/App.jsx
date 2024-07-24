import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ThemeButton from './components/ThemeButton'
import { WeatherProvider } from './context/theme/Weather/WeatherContext'
import { NewsProvider } from './context/theme/news/NewsContext'
import { QuoteProvider } from './context/quote/QuoteContext'

const App = () => {
  return (
    <NewsProvider>
      <WeatherProvider>
        <QuoteProvider>
        <Navbar/>
        <Home/>
        <ThemeButton/>
        </QuoteProvider>
    </WeatherProvider>
    </NewsProvider>
  )
}

export default App