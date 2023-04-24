import React, { useState } from 'react';
import './styles/IndicatorsPage.css';
import StatsPage from './StatsPage';
import { IndicatorButton } from '../section/LineButton';


function IndicatorsPage() {
  
    const [selectedNumber, setSelectedNumber] = useState(null);
  
    const handleButtonClicked = (id) => {
      console.log(`Button clicked: ${id}`);
      setSelectedNumber(id);
      console.log(`Selected number: ${id}`);
    };
  
    return (
      <div>
        {selectedNumber ? (
        <div className="page">
          <StatsPage id={selectedNumber}/>
        </div>
        ) : (
      
          <div className="maincontent">
            <h1> Indicadores </h1>
              <IndicatorButton
                id={1}
                name={"Primeiro Indicador"}
                onClick={() => handleButtonClicked(1)}
              />
              <IndicatorButton
                id={2}
                name={"outro Indicador"}
                onClick={() => handleButtonClicked(2)}
              />
              <IndicatorButton
                id={3}
                name={"a Indicador"}
                onClick={() => handleButtonClicked(3)}
              />
          </div>
        )

        }
      </div>
      
    );
  }

  
  export default IndicatorsPage;
  