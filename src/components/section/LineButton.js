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

export default LineButton;