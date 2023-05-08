import React from 'react';
import './styles/LineButton.css';

function LineButton(props) {

    const handleClick = () => {
        console.log(`Button clicked: ${props.number}`);
        props.onClick();
      };

  let buttonClass = "blue-button";

  if (props.number.toString().startsWith("2")) {
    buttonClass = "blue-button";
  } else if (props.number.toString().startsWith("7")) {
    buttonClass = "red-button";
  } else if (props.number.toString().startsWith("5")) {
    buttonClass = "yellow-button";
  }
  return (
    <button className={buttonClass} onClick={handleClick}>
      {props.number}
    </button>
  );
}

/* Indicator button style and mechanics*/
const buttonStyle = {
  backgroundColor: '#c07f00',
  padding: '20px',
  color: 'white',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  width: '100%',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px'
};

const handleMouseOver = (e) => {
  e.target.style.backgroundColor = '#ffd95a';
  e.target.style.color = 'black';
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = '#c07f00';
  e.target.style.color = 'white';
};

function IndicatorButton(props) {

  const handleClick = () => {
      console.log(`Button clicked: ${props.id}`);
      props.onClick();
    };

  //let buttonClass = "blue-button";

  return (
    <button className="default" style={buttonStyle}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave} onClick={handleClick}>
      {props.name}
    </button>
  );
}

export { LineButton, IndicatorButton };