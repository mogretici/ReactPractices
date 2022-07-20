import React from 'react'
import Button from './Button';
import Header from './Header';
import {useTheme} from '../context/ThemeContext';
import Profile from './Profile';
import '../App.css';



function Container() {
 const {theme}= useTheme();

 
  return (
    <div className= {`app ${theme}`}>
    <Header />
    <hr />
    <Button />
    <Profile />
    </div>
  )
}

export default Container