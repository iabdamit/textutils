// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1400)
  }
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='rgb(14 47 107)';
      showAlert('Dark mode has been enabled','success')
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      // document.body.style.backgroundColor='rgb(147 149 212)';
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
      // document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText='About Us'/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path='/about' element={<About/>}>
    </Route>
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text Here To Analyse" mode={mode}/>}>
    </Route>
    </Routes>
    </div>
    </Router>
    </>
    );
  }
  
  export default App;
  