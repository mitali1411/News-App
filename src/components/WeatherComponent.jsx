import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import WeatherContext from '../context/theme/Weather/WeatherContext'

const WeatherComponent = () => {

  const {theme} = useContext(ThemeContext)
  const {WeatherData} = useContext(WeatherContext)

  if(!WeatherData){
    return <div className={theme?"card p-5 bg-secondary" : "card p-5"}>
      <h1 className="text-warning">Loading...</h1>
    </div>
  }

  return (
    <div className={theme ? 'card p-5 bg-dark text-light' : 'card p-5 text-dark border-dark'}>
        <div className="d-flex align-items-center justify-content-between">
            <span>
                <h1>{WeatherData.current.temp_c}°C</h1>
                <h3>{WeatherData.location.name}</h3>
            </span>
            <span>
                <img style={{height : '50px'}} src={WeatherData.current.condition.icon}alt="" />
                <p style={{marginTop : '10px', fontSize:'22px'}}>{WeatherData.current.condition.text}</p>
            </span>
        </div>
    </div>
  )
}

export default WeatherComponent


