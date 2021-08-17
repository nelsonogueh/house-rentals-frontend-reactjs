import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'

function NavBar({clickeventUp,clickeventIn}) {
    const [isShowNav, setisShowNav] = useState(false)
    return (
        <section>
            <div className="navbar">
                <Link to="/">
                    <div className="logo">
                <img src="/assets/Vector.png" alt="" />
                <img src="/assets/dshr..png" alt="" />
            </div>
                </Link>
            <ul className="nav-items">
                <li><button>About us</button></li>
                <li><button>For Rent</button></li>
                <li ><button className="signin" onClick={clickeventIn}>Agents</button></li>
                </ul>
                <span  onClick={()=>setisShowNav(!isShowNav)}><FiMenu /></span>
            </div>
            <ul className={isShowNav?"nav-drawer show ":"nav-drawer"}>
                <li><button>About us</button></li>
                <li><button>For Rent</button></li>
                <li><button>Agents</button></li>
                <li ><button className="signup"onClick={clickeventUp}>Sign Up</button></li>
                <li ><button className="signin" onClick={clickeventIn}>Sign In</button></li>
            </ul>
            
            </section>
    )
}

export default NavBar
