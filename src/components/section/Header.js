import React from 'react';
import './styles/Header.css';

function Header({ handleButtonClick, handleAboutClick, handleIndicatorsClick, handleReturnClick }) {
  return (
    <div className="header">
      <div className="header-left">
        <span className="header-item" onClick={handleIndicatorsClick}>Opt</span>
        <span className="header-item" onClick={() => handleButtonClick(null)}>
          Linhas
        </span>
      </div>
      <div className="header-right">
        <span className="header-item" onClick={handleAboutClick}>
          Sobre
        </span>
        {handleReturnClick && (
          <span className="header-item" onClick={handleReturnClick}>
            Voltar
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
