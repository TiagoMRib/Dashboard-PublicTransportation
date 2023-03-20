import React, { useState } from 'react';
import Header from './components/Header';
import LineButton from './components/LineButton';
import InfoPage from './components/InfoPage';
import './Main.css';

function Main() {
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
              <LineButton number={203} onClick={() => handleButtonClicked(203)} />
              <LineButton number={204} onClick={() => handleButtonClicked(204)} />
              <LineButton number={205} onClick={() => handleButtonClicked(205)} />
              <LineButton number={504} onClick={() => handleButtonClicked(504)} />
              <LineButton number={701} onClick={() => handleButtonClicked(701)} />
        </div>
        )}
      </div>
    );
}

export default Main;