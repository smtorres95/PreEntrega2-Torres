import React, { useState } from 'react'
import './Navbar.css'

import { Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {

    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearch(value)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }





  return (
    <nav>
        <div className='search'>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search anything' value={value} onChange={handleChange}></input>
            <button type="submit">Search</button>
            </form>            
        </div>
        <div className='dflex'>
            <Link to="/about" className='aboutUs'>About us</Link>
            <Link to="/cart" className='cartWidget'><CartWidget/></Link>
        </div>
    </nav>
  )
}

export default Navbar