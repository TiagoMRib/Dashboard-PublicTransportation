import React from 'react';
import './styles/IndicatorsPage.css';
import StatsPage from './StatsPage';


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
              <LineButton
                id={1}
                name={"Primeiro Indicador"}
                onClick={() => handleButtonClicked(id)}
              />
              <LineButton
                id={2}
                name={"outro Indicador"}
                onClick={() => handleButtonClicked(id)}
              />
              <LineButton
                id={3}
                name={"a Indicador"}
                onClick={() => handleButtonClicked(id)}
              />
          </div>
        )

        }
      </div>
      
    );
  }

  
  export default IndicatorsPage;
  