import React, { useState } from 'react';
import Header from './components/Header';
import LineButton from './components/LineButton';
import InfoPage from './components/InfoPage';
import './Main.css';

function Main() {

    const json_lineData = '[ { "number": 203 },{ "number": 204 }, { "number": 205 }, { "number": 504 }, { "number": 701 } ]';
    const lineData = JSON.parse(json_lineData);

    const [selectedNumber, setSelectedNumber] = useState(null);
    const aboutpage = false;

    const handleButtonClicked = (number) => {
        console.log(`Button clicked: ${number}`);
        setSelectedNumber(number);
        console.log(`Selected number: ${selectedNumber}`);
    };

    console.log(`Selected number: ${selectedNumber}`);
  
    return (
      <div>
        <Header handleButtonClick={handleButtonClicked} />
        {selectedNumber ? (
        <div className="page">
          <InfoPage number={selectedNumber} />
        </div>
      ) : (
        
        <div className="content">
              <h1> Lines </h1>
              {lineData.map(line => (
              <LineButton
                key={line.number}
                number={line.number}
                onClick={() => handleButtonClicked(line.number)}
              />
              ))}
        </div>
        )}
      </div>
    );
}

export default Main;