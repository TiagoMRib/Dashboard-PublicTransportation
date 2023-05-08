import React, { useState } from 'react';
import './styles/IndicatorsPage.css';
import StatsPage from './StatsPage';
import { IndicatorButton } from '../section/LineButton';


function IndicatorsPage() {
  
    const [selectedNumber, setSelectedNumber] = useState(null);
  
    const handleButtonClicked = (id, name) => {
      console.log(`Button clicked: ${id}`);
      setSelectedNumber({id,name});
      console.log(`Selected number: ${id}`);
    };
  
    return (
      <div>
        {selectedNumber ? (
        <div className="page">
          <StatsPage id={selectedNumber.id} name={selectedNumber.name}/>
        </div>
        ) : (
      
          <div className="maincontent" style={{textAlign: 'center'}}>
            <h1> Indicadores </h1>
            <div className="button-group" style={{ display: 'flex', justifyContent: 'center' }}>
              <IndicatorButton
                id={1}
                name={"Viagens/hora numa megalinha em diferentes horários"}
                onClick={() => handleButtonClicked(1, "Viagens/hora numa megalinha em diferentes horários")}
              />
              <IndicatorButton
                id={2}
                name={"Distância útil e em vazio numa megalinha"}
                onClick={() => handleButtonClicked(2, "Distância útil e em vazio numa megalinha")}
              />
              <IndicatorButton
                id={3}
                name={"Indicador 3"}
                onClick={() => handleButtonClicked(3, "Indicador 3")}
              />
              </div>
          </div>
        )

        }
      </div>
      
    );
  }

  
  export default IndicatorsPage;
  