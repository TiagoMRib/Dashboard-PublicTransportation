import React from 'react';
import { LineButton, IndicatorButton } from '../section/LineButton';
import BarChart from '../section/charts/BarChart';
import MyBarChart from '../section/charts/MyBarChart';
import './styles/InfoPage.css';
import LineChart from '../section/charts/LineChart';
import AltLineChart from '../section/charts/AltLineChart';
import ScatterPlot from '../section/charts/ScatterPlot';
import StackedBarChart from '../section/charts/StackedBarChart';
import Path from '../section/Path'

function InfoPage(props) {

      const path = ['s bento', 'combatentes', 'hospital s joao', 'cena', 'exemplo', 'aaaaaaaaaaaa'];

      const jsonData = '[{"x": "A", "y": 10, "label": "Label A"}, {"x": "B", "y": 20, "label": "Label B"}, {"x": "C", "y": 30, "label": "Label C"}]';

      const data = JSON.parse(jsonData);


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
      
      /////////// FOR OLD LINECHART
      const json_linedata = '[  {"x":"12:30","y":10,"z":"Monday"},  {"x":"13:30","y":20,"z":"Monday"},  {"x":"17:40","y":15,"z":"Monday"},  {"x":"19:00","y":18,"z":"Monday"},  {"x":"13:00","y":20,"z":"Tuesday"},  {"x":"14:00","y":20,"z":"Tuesday"},  {"x":"9:00","y":8,"z":"Friday"},  {"x":"10:00","y":8,"z":"Friday"},  {"x":"12:00","y":17,"z":"Friday"},  {"x":"19:00","y":8,"z":"Friday"}]';

      const old_linedata = JSON.parse(json_linedata);
    


      const sortedData = old_linedata.sort((a, b) => a.xValue - b.xValue);

      const modifiedData = sortedData.map(d => ({
        ...d,
        xValue: new Date(`1970-01-01T${d.x}:00`).getTime() // convert time to numeric value
      }));

      ////////////////////////////////

    
    const stackData = [
        {x: "203", y: 35, z: 40},
        {x: "204", y: 40, z: 20},
        {x: "205", y: 30, z: 20},
        {x: "206", y: 10, z: 60}
    ]

      switch(props.number){
        case 203:
            return (
                <div className="content">
                    <h1 className= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <BarChart data={data} width={600} height={400}/>
                    <StackedBarChart data={stackData} width={600} height={400}/>
                </div>
            );
        case 204:
            return (
                <div className="content">
                    <h1 className= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <MyBarChart data={data} width={600} height={400}/>
                    <ScatterPlot data={linedata} width={600} height={400}/>
                </div>
            );
        default:
            return (
                <div className="content">
                    <h1 classname= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <Path stops={path}/>
                    <div className="graph">
                        <h2 classname="label"> Graph </h2>
                        <BarChart data={data} width={600} height={400}/>
                    </div>
                    <div className="graph">
                        <h2 classname="label"> Graph </h2>
                        <AltLineChart data={linedata}/> 
                    </div>
                    <div className="graph">
                        <h2 classname="label"> Graph </h2>
                        <LineChart data={modifiedData} width={600} height={400}/>
                    </div>
                    <div className="graph">
                        <h2 classname="label"> Graph </h2>
                        <MyBarChart data={data} width={600} height={400}/>
                    </div>
                       
                </div>
            );
        }
}

export default InfoPage;