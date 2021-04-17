import React, { useState, useEffect  } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu.jsx";
import HeaderBlock from "./HeaderBlock.jsx";
import Login from "./Login.jsx";
import { useSelector, useDispatch } from "react-redux";
import { login,logout, selectUser } from './features/userSlice';
import Signup from './Signup'
import {auth } from './firebase';
import TeslaAccount from './TeslaAccount';


function App() {
  const user = useSelector(selectUser)  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect (()=>{
  auth.onAuthStateChanged((userAuth)=>{
    if (userAuth){
    dispatch(
      login({
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
    }))
    }
    else {
      dispatch (logout())
    }
  })
  },[dispatch])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact  path="/">
            <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>

          <Route exact  path='/login'>
            {user ? <Redirect to='/teslaaccount'/>: <Login />}
          </Route>

          <Route exact  path='/signup'>
           <Signup />
          </Route>

          <Route exact path ='/teslaaccount'>
           
          {!user ? <Redirect to='/login'/>: (
            <>
            <TeslaAccount  isMenuOpen={isMenuOpen}
            setMenuOpen = {setMenuOpen} 
            />
            {isMenuOpen && <Menu />}
            </>
          )}

          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
