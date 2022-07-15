import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div>
        <h1>Üzgünüm Aradığınız Sayfa Bulunamadı !</h1> <br />
        <NavLink to="/" >Anasayfaya Dön</NavLink>
        </div>
  )
}

export default Error404