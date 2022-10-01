import React from 'react'
import { Link } from 'react-router-dom';
const Headermenu = () => {
  return (
    <div>
      <div>
        <a href='#menus' >Menu</a>
      </div>
      <div>
        <a href='#order' >Order</a>
      </div>
      <div>
        <h3><Link to="/home">Farmer's Feast</Link></h3>
      </div>
      <div>
        <a href='#catering' >Catering</a>
      </div>
      <div>
        <a href='#about-footer' >About</a>
      </div>
      <div>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  )
}

export default Headermenu