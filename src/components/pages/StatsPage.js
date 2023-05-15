import React, { useState } from 'react';
import './styles/StatsPage.css';
import AltLineChart from '../section/charts/AltLineChart';

function StatsPage(props) {
    const [selectedMegaline1, setSelectedMegaline1] = useState(null);
    const [selectedMegaline2, setSelectedMegaline2] = useState(null);
    const [selectedHorario1, setSelectedHorario1] = useState(null);
    const [selectedHorario2, setSelectedHorario2] = useState(null);

    const megalines = [1, 2, 3, 4];
    const horarios = ["Normal", "Covid"];

    const linedata = {
        "data": [
          {
            "tf": 3600,
            "ti": 0,
            "value": 0
          },
          {
            "tf": 7200,
            "ti": 3600,
            "value": 0
          },
          {
            "tf": 10800,
            "ti": 7200,
            "value": 0
          },
          {
            "tf": 14400,
            "ti": 10800,
            "value": 0
          },
          {
            "tf": 18000,
            "ti": 14400,
            "value": 0
          },
          {
            "tf": 21600,
            "ti": 18000,
            "value": 0
          },
          {
            "tf": 25200,
            "ti": 21600,
            "value": 0
          },
          {
            "tf": 28800,
            "ti": 25200,
            "value": 10
          },
          {
            "tf": 32400,
            "ti": 28800,
            "value": 5
          },
          {
            "tf": 36000,
            "ti": 32400,
            "value": 4
          },
          {
            "tf": 39600,
            "ti": 36000,
            "value": 4
          },
          {
            "tf": 43200,
            "ti": 39600,
            "value": 4
          },
          {
            "tf": 46800,
            "ti": 43200,
            "value": 4
          },
          {
            "tf": 50400,
            "ti": 46800,
            "value": 4
          },
          {
            "tf": 54000,
            "ti": 50400,
            "value": 4
          },
          {
            "tf": 57600,
            "ti": 54000,
            "value": 4
          },
          {
            "tf": 61200,
            "ti": 57600,
            "value": 4
          },
          {
            "tf": 64800,
            "ti": 61200,
            "value": 4
          },
          {
            "tf": 68400,
            "ti": 64800,
            "value": 4
          },
          {
            "tf": 72000,
            "ti": 68400,
            "value": 4
          },
          {
            "tf": 75600,
            "ti": 72000,
            "value": 0
          },
          {
            "tf": 79200,
            "ti": 75600,
            "value": 0
          },
          {
            "tf": 82800,
            "ti": 79200,
            "value": 0
          },
          {
            "tf": 86400,
            "ti": 82800,
            "value": 0
          }
        ],
        "schedule": "29418"
      }

      const linedata2 = {
        "data": [
          {
            "tf": 3600,
            "ti": 0,
            "value": 9
          },
          {
            "tf": 7200,
            "ti": 3600,
            "value": 3
          },
          {
            "tf": 10800,
            "ti": 7200,
            "value": 8
          },
          {
            "tf": 14400,
            "ti": 10800,
            "value": 2
          },
          {
            "tf": 18000,
            "ti": 14400,
            "value": 6
          },
          {
            "tf": 21600,
            "ti": 18000,
            "value": 7
          },
          {
            "tf": 25200,
            "ti": 21600,
            "value": 1
          },
          {
            "tf": 28800,
            "ti": 25200,
            "value": 5
          },
          {
            "tf": 32400,
            "ti": 28800,
            "value": 10
          },
          {
            "tf": 36000,
            "ti": 32400,
            "value": 4
          },
          {
            "tf": 39600,
            "ti": 36000,
            "value": 4
          },
          {
            "tf": 43200,
            "ti": 39600,
            "value": 4
          },
          {
            "tf": 46800,
            "ti": 43200,
            "value": 4
          },
          {
            "tf": 50400,
            "ti": 46800,
            "value": 4
          },
          {
            "tf": 54000,
            "ti": 50400,
            "value": 4
          },
          {
            "tf": 57600,
            "ti": 54000,
            "value": 4
          },
          {
            "tf": 61200,
            "ti": 57600,
            "value": 4
          },
          {
            "tf": 64800,
            "ti": 61200,
            "value": 4
          },
          {
            "tf": 68400,
            "ti": 64800,
            "value": 4
          },
          {
            "tf": 72000,
            "ti": 68400,
            "value": 4
          },
          {
            "tf": 75600,
            "ti": 72000,
            "value": 3
          },
          {
            "tf": 79200,
            "ti": 75600,
            "value": 2
          },
          {
            "tf": 82800,
            "ti": 79200,
            "value": 6
          },
          {
            "tf": 86400,
            "ti": 82800,
            "value": 9
          }
        ],
        "schedule": "29410"
      };

    switch (props.id) {
        case 1:
            return (
                <div className="content" style={{ display: 'grid', gridTemplateRows: '1fr 5fr'}}>
                    <h1>{props.name}</h1>
                    <div className="container" style={{ display: 'flex' }}>
                        <div className="sidebar">
                            <div classname="megalinha">
                            <label htmlFor="megalinha">Megalinha 1</label>
                            <select
                                id="megalinha"
                                onChange={(e) => setSelectedMegaline1(e.target.value)}
                                value={selectedMegaline1 || ""}
                            >
                                <option value=""></option>
                                {megalines.map((megaline) => (
                                    <option key={megaline} value={megaline}>
                                        {megaline}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="megalinha2">Megalinha 2</label>
                            <select
                                id="megalinha2"
                                onChange={(e) => setSelectedMegaline2(e.target.value)}
                                value={selectedMegaline2 || ""}
                            >
                                <option value=""></option>
                                {megalines.map((megaline) => (
                                    <option key={megaline} value={megaline}>
                                        {megaline}
                                    </option>
                                ))}
                            </select>
                            </div>
                            <div classname="horarios">
                            <label htmlFor="horario1">Horário 1</label>
                            <select
                                id="horario1"
                                onChange={(e) => setSelectedHorario1(e.target.value)}
                                value={selectedHorario1 || ""}
                            >
                                <option value=""></option>
                                {horarios.map((horario) => (
                                    <option key={horario} value={horario}>
                                        {horario}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="horario2">Horário 2</label>
                            <select
                                id="horario2"
                                onChange={(e) => setSelectedHorario2(e.target.value)}
                                value={selectedHorario1 || ""}
                            >
                                <option value=""></option>
                                {horarios.map((horario) => (
                                    <option key={horario} value={horario}>
                                        {horario}
                                    </option>
                                ))}
                            </select>
                            </div>
                        </div>
                        <div className="graphs">
                        {selectedMegaline1 ? (
                            <div classname="selectedGraph">
                            
                        <p>Line selected: {selectedMegaline1}</p>
                        <h2 classname="label"> Graph </h2>
                        <AltLineChart data={linedata} data2={linedata2}/> 
                        </div>
                        ) : (
                            <p>No megaline selected</p>
                            
                        )}
                        </div>
                    </div>
                </div>
            );
        case 2:
            return <div className="content"></div>;
        default:
            return <div className="content"></div>;
    }
}

export default StatsPage;
