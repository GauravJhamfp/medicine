import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [prodt, setProdt] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='Logoweb' src={assets.Logoweb} alt="" /></Link>
      <ul className="navbar-prodt">
        <Link to="/" onClick={() => setProdt("home")} className={`${prodt === "home" ? "active" : ""}`}>home</Link>
        <Link to='#explore-prodt' onClick={() => setProdt("prodt")} className={`${prodt === "prodt" ? "active" : ""}`}>prodt</Link>
        <Link to='#app-download' onClick={() => setProdt("mob-app")} className={`${prodt === "mob-app" ? "active" : ""}`}>mobile app</Link>
        <Link to="/about" onClick={() => setProdt("aboutus")} className={`${prodt === "aboutus" ? "active" : ""}`}>about us</Link>
        <Link to='#footer' onClick={() => setProdt("contact")} className={`${prodt === "contact" ? "active" : ""}`}>contact us</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li>
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
