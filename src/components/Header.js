import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header({ handleButtonClick }) {
  
    return (
      <div className="header">
        <div className="header-left">
          <span className="header-item">Opt</span>
          <span className="header-item" onClick={() => handleButtonClick(null)}>Linhas</span>
          <Link to="/lines">Lines</Link>
        </div>
        <div className="header-right">
          <span className="header-item">Sobre</span>
        </div>
      </div>
    );
  }

export default Header;