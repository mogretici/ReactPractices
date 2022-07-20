import React from 'react'
import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme, setTheme}= useTheme();

  return (
    <div style={{textAlign:'right'}}>
    Active Theme: {theme} 
    <br />
  <button onClick={()=>{theme==="dark"?setTheme("light"):setTheme('dark')}}>Change Theme</button>
    </div>
  )
}

export default Button