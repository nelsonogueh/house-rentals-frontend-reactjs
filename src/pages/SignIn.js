import { React, useState, useReducer, useEffect } from 'react';
import { Redirect,NavLink,Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import{BsEyeSlash,BsEye} from 'react-icons/bs'
import './SignIn.css'



const reducer = (state,action) => {
    switch (action.type) {
        case 'ERROR':
            return { ...state, showError: true, errorMessage: 'Enter email and password!' }
        case 'EMAIL_ERROR':
            return { ...state, showError: true, errorMessage: 'Invalid email!' }
        case 'PASSWORD_ERROR':
            return { ...state, showError: true, errorMessage: 'Password cannot be less than 6 characters' }
        case 'CLOSE_MESSAGE':
            return{...state, showError:false}
        default:
            return state
    }
}
const defaultState = {
    showError: false,
    errorMessage:''
}
function SignIn({ showSignIn, clickeventUp,setIsShowSigIn }) {
    let history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            closeMessage()
        },10000)
    })

    const [showPassword, setShowPassword] = useState(false)
    const [state,dispatch] = useReducer(reducer,defaultState)

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [showError,setShowError] = useState(true)
    const show = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            dispatch({type:'ERROR'})
        }
        else if (!email.includes('@') || !email.includes('.')) {
            dispatch({type:'EMAIL_ERROR'})
        }
        else if (password.length < 6) {
            dispatch({type:'PASSWORD_ERROR'})
        }
        else {
            // <Redirect to="/dashboard" />
            history.push('/dashboard/1234')
            setIsShowSigIn(false)
        }
    }
    const closeMessage = () => {
        dispatch({type:'CLOSE_MESSAGE'})
    }
    return (
        <div className={showSignIn ? "signin-page show" : "signin-page"}>
            <p className="error">{ state.showError&&state.errorMessage}</p>
            <p id="big">Welcome Back!</p>
            <p>Find your perfect dream with just a few steps</p>
            
    
            <div className="form-signin">
                <div className="form-group ">
                <label htmlFor="">Email Address</label>
                    <input className="large-input" type="email" name="email" value={email} onChange={ (e)=>setEmail(e.target.value)}/>
                    </div>
                    {/* here */}
                     <div className=" form-group ">
                        <label htmlFor="">Password</label>
                        <div className="password-field">
                        <input className="large-input" type={showPassword?"text":"password"} name="password" value={password} onChange={ (e)=>setPassword(e.target.value)}/>
                            <i onClick={show}>{showPassword?<BsEye />:<BsEyeSlash /> }</i>
                        </div>
                       
                </div>
                </div>
             
            <div className="remember-me">
                <input type="checkbox" name="" id="" />
          <span>Remember me<a href="#">Forgot Password</a></span>
            </div>
            <div className="signin-btn">
                <button id="btn" onClick={ handleSubmit}>Sign In</button>
                <p>Don't have an account yet? <button onClick={clickeventUp }>SignUp</button></p>
            </div>
            
        </div>

    )
}

export default SignIn
