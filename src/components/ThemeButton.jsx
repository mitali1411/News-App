import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

const ThemeButton = () => {

  const {dispatch, theme} = useContext(ThemeContext)

  const handleSubmit = () => {
    dispatch({
      type: "CHANGE_THEME", 
    })
  }

  return (
    <button id='themeBtn' className={theme?'btn btn-warning' :'btn btn-dark' } onClick={handleSubmit}> {theme ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
  )
}

export default ThemeButton;