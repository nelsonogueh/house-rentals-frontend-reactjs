import {React,useState} from 'react'
import {BsEyeSlash,BsEye} from 'react-icons/bs'
import './Signup.css'
function Signup({showSignUp,clickeventIn}) {
    const [showPassword, setShowPassword] = useState(false)
    
    const show = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={showSignUp?"signup-page show":"signup-page"}>
            <p>Find your perfect dream with just a few steps</p>
            <p id="big">Register Now!</p>
            <div className="top-level">
            <div className="form-level">
                <div className="form-group">
                <label htmlFor="">First Name</label>
                        <input type="text" name="firstname" />
                        
                </div>
                <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname"/>
            </div>
                </div>
            </div>
            <div className="top-level">
            <div className="form-level">
                <div className="form-group">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email"/>
                </div>
                <div className="form-group">
                <label htmlFor="">Phone Number</label>
                <input type="text" name="phone" />
            </div>
                </div>
            </div>
             <div className="top-level">
            <div className="form-level">
                <div className="form-group">
                        <label htmlFor="">Password</label>
                        <div className="password-field">
                        <input type={showPassword?"text":"password"} name="password"/>
                            <i onClick={show}>{showPassword?<BsEye />:<BsEyeSlash /> }</i>
                        </div>
                       
                </div>
                <div className="form-group">
                <label htmlFor="">Confirm Password</label>
                <div className="password-field">
                        <input type="password" name="confirmPassword"/>
                            <i onClick={show}>{showPassword?<BsEye />:<BsEyeSlash /> }</i>
                        </div>
            </div>
                </div>
            </div>
            <div className="privacy-group">
                <input type="checkbox" name="" id="" />
            <span>I agree to <a href="#">Privacy policies</a>, <a href="#">Terms & Conditions</a></span>
            </div>
            <div className="signup-btn">
                <button id="btn">create account</button>
                <p>Already have an Account? <button onClick={clickeventIn}>Sign In</button></p>
            </div>
            
        </div>
    )
}

export default Signup
