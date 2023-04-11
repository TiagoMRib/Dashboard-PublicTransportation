import React, { useState } from 'react';
import LineButton from './LineButton';
import BarChart from './BarChart';
import './InfoPage.css';
import LineChart from './LineChart';

function InfoPage(props) {

      /*const data = [
          { x: "Apples", y: 10},
          { x: "Oranges", y: 20},
          { x: "Grapes", y: 8},
          { x: "Bananas", y: 15},
        ];*/

      const jsonData = '[{"x": "A", "y": 10, "label": "Label A"}, {"x": "B", "y": 20, "label": "Label B"}, {"x": "C", "y": 30, "label": "Label C"}]';

      const data = JSON.parse(jsonData);

      /*const linedata = [
        { x: "12:30", y: 10, z: "Monday"},
        { x: "13:30", y: 20, z: "Monday"},
        { x: "17:40", y: 15, z: "Monday"},
        { x: "19:00", y: 18, z: "Monday"},
        { x: "13:00", y: 20, z: "Tuesday"},
        { x: "14:00", y: 20, z: "Tuesday"},
        { x: "9:00", y: 8, z: "Friday"},
        { x: "10:00", y: 8, z: "Friday"},
        { x: "12:00", y: 17, z: "Friday"},
        { x: "19:00", y: 8, z: "Friday"},
      ];*/

      const json_linedata = '[  {"x":"12:30","y":10,"z":"Monday"},  {"x":"13:30","y":20,"z":"Monday"},  {"x":"17:40","y":15,"z":"Monday"},  {"x":"19:00","y":18,"z":"Monday"},  {"x":"13:00","y":20,"z":"Tuesday"},  {"x":"14:00","y":20,"z":"Tuesday"},  {"x":"9:00","y":8,"z":"Friday"},  {"x":"10:00","y":8,"z":"Friday"},  {"x":"12:00","y":17,"z":"Friday"},  {"x":"19:00","y":8,"z":"Friday"}]';

      const linedata = JSON.parse(json_linedata);
    


      const sortedData = linedata.sort((a, b) => a.xValue - b.xValue);

      const modifiedData = sortedData.map(d => ({
        ...d,
        xValue: new Date(`1970-01-01T${d.x}:00`).getTime() // convert time to numeric value
      }));
    
  
    return (
      
        <div className="content">
              <h1 classname= "selectedline" > Linha <LineButton number={props.number}/></h1>
              <BarChart data={data} width={600} height={400}/>
              <LineChart data={modifiedData} width={600} height={400}/>
              
        </div>
        );
}

export default InfoPage;