import React from 'react';
import LineButton from './LineButton';
import BarChart from './BarChart';
import MyBarChart from './MyBarChart';
import './InfoPage.css';

function InfoPage(props) {
    const data = [
        { x: "Apples", y: 10},
        { x: "Oranges", y: 20},
        { x: "Grapes", y: 8},
        { x: "Bananas", y: 15},
      ];

    switch(props.number){
        case 203:
            return (
                <div className="content">
                    <h1 className= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <BarChart data={data} width={600} height={400}/>
                </div>
            );
        case 204:
            return (
                <div className="content">
                    <h1 className= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <MyBarChart data={data} width={400} height={400}/>
                </div>
            );
        default:
            return (
                <div className="content">
                    <h1 className= "selectedline" > Linha <LineButton number={props.number}/></h1>
                    <BarChart data={data} width={600} height={400}/>
                </div>
            );
    }
}

export default InfoPage;