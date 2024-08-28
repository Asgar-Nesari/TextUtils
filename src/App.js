
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { Route,Router,Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark'); 
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has enabled",'success');
      document.title='React- Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode has enabled','success');
      document.title='React- Light Mode';
    }
  }

  const togglemodegreen=()=>{
    if(mode==='light'){
      setmode('green'); 
      document.body.style.backgroundColor="green";
      showAlert("Green mode has enabled",'success');
      document.title='React- Green Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode has enabled','success');
      document.title='React- Light Mode';
  
    }
  }

  const togglemodepink=()=>{
    if(mode==='light'){
      setmode('pink'); 
      document.body.style.backgroundColor="pink";
      showAlert("Pink mode has enabled",'success');
      document.title='React- Pink Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode has enabled','success');
      document.title='React- Light Mode';
  
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} togglemode={togglemode} togglemodegreen={togglemodegreen} togglemodepink={togglemodepink}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter the text to Analyze Beloaw" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

