
import React,{useContext, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { useRef } from 'react'
import dropdown from '../../assets/dropdown.png'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        // e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>UAM MART</p>
        </div>
        <img onClick={dropdown_toggle} className='dropdown' src={dropdown} alt=''/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'inherit'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'inherit'}} to='/mens'>Men</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none' , color:'inherit'}} to='/womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none' , color:'inherit'}} to='/kids'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link style={{textDecoration:'none' , color:'inherit'}} to='/login'><button>Sign Up</button></Link>
            <Link style={{textDecoration:'none' , color:'inherit'}} to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar
