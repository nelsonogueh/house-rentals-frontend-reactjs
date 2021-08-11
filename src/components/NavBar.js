import {React,useState} from 'react'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'

function NavBar() {
    const [isShowNav, setisShowNav] = useState(false)
    return (
        <section>
        <div className="navbar">
            <div className="logo">
                <img src="/assets/Vector.png" alt="" />
                <img src="/assets/dshr..png" alt="" />
            </div>
            <ul className="nav-items">
                <li><button>About us</button></li>
                <li><button>For Rent</button></li>
                <li><button>Agents</button></li>
                <li ><button className="signup">Sign Up</button></li>
                <li ><button className="signin">Sign In</button></li>
                </ul>
                <span  onClick={()=>setisShowNav(!isShowNav)}><FiMenu /></span>
            </div>
            <ul className={isShowNav?"nav-drawer show ":"nav-drawer"}>
                <li><button>About us</button></li>
                <li><button>For Rent</button></li>
                <li><button>Agents</button></li>
                <li ><button className="signup">Sign Up</button></li>
                <li ><button className="signin">Sign In</button></li>
            </ul>
            </section>
    )
}

export default NavBar
