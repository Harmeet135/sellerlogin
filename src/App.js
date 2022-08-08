import React, { useEffect, useState, createContext } from 'react';

import './App.css';
import Login from './components/login/Login';
import Loginb from './components/login/Loginb';
import Signup from './components/login/phone/Signup';
import Navbar from './components/navbar/Navbar';
import { auth } from "./firebass-config";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Body from './components/body/Body';


export const Gloabaldata = createContext("");

const App = () => {

  const [User, setuser] = useState("");
  const authListerner = () => {
    onAuthStateChanged(auth, (user) => {
      setuser(user);
      // const uid = user.uid;
    });
  };


  useEffect(() => {
    authListerner();
  }, []);


  const logout = async () => {
    await signOut(auth);
  };



  return (
    <Gloabaldata.Provider value={{ Userr: User, logout: logout }}>
      <div className="App">
        <Navbar />

        <Login />
        <Loginb />
        <Signup />
        <Body />
      </div>
    </Gloabaldata.Provider>
  );
}

export default App;
