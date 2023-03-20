import React, { useState } from 'react';
import LineButton from './LineButton';
import BarChart from './BarChart';
import './InfoPage.css';

function InfoPage(props) {

    const data = [
        { x: "Apples", y: 10},
        { x: "Oranges", y: 20},
        { x: "Grapes", y: 3},
        { x: "Bananas", y: 15},
      ];
    
  
    return (
      
        <div className="content">
              <h1 classname= "selectedline" > Linha <LineButton number={props.number}/></h1>
              <BarChart data={data} width={600} height={400}/>
              
        </div>
        );
}

export default InfoPage;