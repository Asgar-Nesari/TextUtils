import React from 'react'
import PropTypes from 'prop-types' //impt
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) { // rfc
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" >{props.aboutText}</Link>
        </li>
      </ul>

      <div className="d-flex mx-2" >
        <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer',border:'2px solid black'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height:'30px', width:'30px', cursor:'progress',border:'2px solid black'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px', width:'30px', cursor:'wait',border:'2px solid black'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer',border:'2px solid black'}}></div>
        <div className="bg-secondary rounded mx-2" onClick={()=>{props.togglemode('secondary')}} style={{height:'30px', width:'30px', cursor:'pointer',border:'2px solid black'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.togglemode('light')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.togglemode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      </div>


    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
  title:PropTypes.string,  //pts
  aboutText:PropTypes.string
}

