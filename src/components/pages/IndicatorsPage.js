import React, { useState } from 'react';
import './styles/IndicatorsPage.css';
import StatsPage from './StatsPage';
import { IndicatorButton } from '../section/LineButton';

function IndicatorsPage() {
  const [selectedInd, setSelectedInd] = useState(null);

  const handleButtonClicked = (id, name) => {
    console.log(`Button clicked: ${id}`);
    setSelectedInd({ id, name });
    console.log(`Selected number: ${id}`);
  };

  const handleReturnClicked = () => {
    setSelectedInd(null);
  };

  return (
    <div>
      {selectedInd ? (
        <div className="page">
          <button onClick={handleReturnClicked}>Return</button>
          <StatsPage id={selectedInd.id} name={selectedInd.name} />
          
        </div>
      ) : (
        <div className="maincontent" style={{ textAlign: 'center' }}>
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
      )}
    </div>
  );
}

export default IndicatorsPage;
