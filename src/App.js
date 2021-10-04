import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');//whether dark mood is enabled
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [btnText, setbtnText] = useState('Dark Mode');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setbtnText('light Mode');
      showAlert('Dark Mode Enabled','success');
      document.body.style.backgroundColor = '#3e3d3e';
    }else{
      setMode('light');
      setbtnText('Dark Mode')
      showAlert('Light Mode Enabled','success');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
        <Alert  alert={alert}/>
        <Switch>
            <Route exact path="/about">
            <About  exact mode={mode}/>
            </Route>
            <Route path="/">
            <TextForm heading="Enter the Text to analyze below" mode={mode} showAlert={showAlert}/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
