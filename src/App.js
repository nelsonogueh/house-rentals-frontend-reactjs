import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Property from './pages/Property'
import Backdrop from './components/Backdrop';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';
import NavbarUser from './components/NavbarUser'
import Dashboard from './pages/Dashboard';
import Confirmation from './components/Confirmation';



function App() {
  const [isShowSignUp, setIsShowSignUp] = useState(false)
  const [isShowSigIn, setIsShowSigIn] = useState(false)


  const hide = () => {
    setIsShowSignUp(false)
    setIsShowSigIn(false)
  }
   
  const showSignUp = () => {
    setIsShowSignUp(true)
    setIsShowSigIn(false)
  }
   const showSignIn = () => {
    setIsShowSignUp(false)
    setIsShowSigIn(true)
  }
  return (
    <Router>
    <div className="App">
      <NavBar clickeventIn={showSignIn} />
      <Backdrop showUp={isShowSignUp} showIn={isShowSigIn } clickevent={hide}/>
        <Signup showSignUp={isShowSignUp} clickeventIn={showSignIn}/>
      <SignIn showSignIn={ isShowSigIn} clickeventUp={showSignUp} setIsShowSigIn={setIsShowSigIn} />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/properties/:id" component={Property} />
            <Route exact path="/dashboard/:id" component={Dashboard}/>
          </Switch>
        </main>
        {/* <NavbarUser />
        <Dashboard /> */}
        {/* <Confirmation /> */}
        </div>
      </Router>
  );
}

export default App;
