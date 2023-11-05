
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';
import Detail from './components/Detail';
import AddStaff from './components/AddStaff';
import UpdateStaff from './components/UpdateStaff';
import About from './components/About';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { gapi } from 'gapi-script';

const clientId = "722907825614-e1es5ea1tkg1fdmv2es1pk5btfat84k5.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  }
  );

  return (
    
      <div>
        <NavigationBar />
        <Routes>

          <Route path='/' element={<Home />}></Route>

          <Route  path='/login' element={<LoginButton/> }></Route>

          <Route  path='/logout' element={<LogoutButton/> }></Route>

          <Route path='/about' element={<About />}></Route>

          <Route path='/contact' element={<Contact />}></Route>

          <Route path='/detail/:id' element={<Detail />}></Route>

          <Route path='/addNewStaff' element={<AddStaff />}></Route>

          <Route path='/updateStaff/:id' element={<UpdateStaff />}></Route>


        </Routes>

      </div >
  );
}

export default App;
