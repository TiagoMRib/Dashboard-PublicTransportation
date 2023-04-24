
import React from 'react';
import './styles/StatsPage.css';

function StatsPage(props) {

      const path = ['s bento', 'combatentes', 'hospital s joao', 'cena', 'exemplo', 'aaaaaaaaaaaa'];

      const jsonData = '[{"x": "A", "y": 10, "label": "Label A"}, {"x": "B", "y": 20, "label": "Label B"}, {"x": "C", "y": 30, "label": "Label C"}]';

      const data = JSON.parse(jsonData);

      const json_linedata = '[  {"x":"12:30","y":10,"z":"Monday"},  {"x":"13:30","y":20,"z":"Monday"},  {"x":"17:40","y":15,"z":"Monday"},  {"x":"19:00","y":18,"z":"Monday"},  {"x":"13:00","y":20,"z":"Tuesday"},  {"x":"14:00","y":20,"z":"Tuesday"},  {"x":"9:00","y":8,"z":"Friday"},  {"x":"10:00","y":8,"z":"Friday"},  {"x":"12:00","y":17,"z":"Friday"},  {"x":"19:00","y":8,"z":"Friday"}]';

      const linedata = JSON.parse(json_linedata);
    


      const sortedData = linedata.sort((a, b) => a.xValue - b.xValue);

      const modifiedData = sortedData.map(d => ({
        ...d,
        xValue: new Date(`1970-01-01T${d.x}:00`).getTime() // convert time to numeric value
      }));
    
    const stackData = [
        {x: "203", y: 35, z: 40},
        {x: "204", y: 40, z: 20},
        {x: "205", y: 30, z: 20},
        {x: "206", y: 10, z: 60}
    ]

      switch(props.id){
        case 1:
            return (
                <div className="content">
                    <div className="sidebar">
                        {/* Sidebar content, e.g. dropdown menus and checkboxes */}
                    </div>
                    <div className="graphs">
                        {/* Main content area */}
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="content">
                </div>
            );
        default:
            return (
                <div className="content">
                    
                </div>
            );
        }
}

export default StatsPage;