import React, { useState } from 'react';
import Header from './components/section/Header';
import LineButton from './components/section/LineButton';
import InfoPage from './components/pages/InfoPage';
import AboutPage from './components/pages/AboutPage';
import './Main.css';

function Main() {
  const json_lineData = '[ { "number": 203 },{ "number": 204 }, { "number": 205 }, { "number": 504 }, { "number": 701 } ]';
  const lineData = JSON.parse(json_lineData);

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [aboutPage, setAboutPage] = useState(false);

  const handleButtonClicked = (number) => {
    console.log(`Button clicked: ${number}`);
    setSelectedNumber(number);
    setAboutPage(false);
    console.log(`Selected number: ${selectedNumber}`);
  };

  const handleAboutClicked = () => {
    setAboutPage(true);
  };

  const handleReturnClicked = () => {
    setSelectedNumber(null);
    setAboutPage(false);
  };

  console.log(`Selected number: ${selectedNumber}`);

  return (
    <div>
      <Header
        handleButtonClick={handleButtonClicked}
        handleAboutClick={handleAboutClicked}
        handleReturnClick={handleReturnClicked}
      />
      {selectedNumber ? (
        <div className="page">
          <InfoPage number={selectedNumber} />
        </div>
      ) : aboutPage ? (
        <div className="page">
          <AboutPage />
        </div>
      ) : (
        <div className="maincontent">
          <h1> Lines </h1>
          {lineData.map((line) => (
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
