import React, { useState } from 'react';
import LineButton from './LineButton';
import BarChart from './BarChart';

function InfoPage() {

    const data = [
        { x: "Apples", y: 10},
        { x: "Oranges", y: 20},
        { x: "Grapes", y: 3},
        { x: "Bananas", y: 15},
      ];
    
  
    return (
      
        <div className="content">
              <BarChart data={data} width={600} height={400}/>
              
        </div>
        );
}

export default InfoPage;