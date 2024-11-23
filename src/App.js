
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
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

  const removebodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const togglemode=(cls)=>{
    removebodyclasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setmode('dark'); 
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has enabled",'success');
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode has enabled','success');
      
    }
  }

  // const togglemodegreen=()=>{
  //   if(mode==='light'){
  //     setmode('gray'); 
  //     document.body.style.backgroundColor="gray";
  //     showAlert("Gray mode has enabled",'success');
      
  //   }
  //   else{
  //     setmode('light');
  //     document.body.style.backgroundColor="white";
  //     showAlert('Light mode has enabled','success');
  
  //   }
  // }

  // const togglemodepink=()=>{
  //   if(mode==='light'){
  //     setmode('pink'); 
  //     document.body.style.backgroundColor="pink";
  //     showAlert("Pink mode has enabled",'success');
      
  //   }
  //   else{
  //     setmode('light');
  //     document.body.style.backgroundColor="white";
  //     showAlert('Light mode has enabled','success');
  
  //   }
  // }
  return (
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route> 
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter , Character counter , Copy Text" mode={mode}/>
           </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

