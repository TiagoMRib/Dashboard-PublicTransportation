import React, { useState } from 'react';
import Header from './components/Header';
import LineButton from './components/LineButton';
import InfoPage from './components/InfoPage';

function Main() {
    const [selectedNumber, setSelectedNumber] = useState(null);

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
          <h1>Line {selectedNumber}</h1>
          <InfoPage />
        </div>
      ) : (
        <div className="content">
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