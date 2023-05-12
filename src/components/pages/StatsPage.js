import React, { useState } from 'react';
import './styles/StatsPage.css';

function StatsPage(props) {
    const [selectedMegaline, setSelectedMegaline] = useState(null);
    const megalines = [1, 2, 3, 4];

    switch (props.id) {
        case 1:
            return (
                <div className="content" style={{ display: 'grid' }}>
                    <h1>{props.name}</h1>
                    <div className="container" style={{ display: 'flex' }}>
                        <div className="sidebar">
                            <label htmlFor="megalinha">Megalinha</label>
                            <select
                                id="megalinha"
                                onChange={(e) => setSelectedMegaline(e.target.value)}
                            >
                                {megalines.map((megaline) => (
                                    <option key={megaline} value={megaline}>
                                        {megaline}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="graphs">
                        {selectedMegaline ? (
                        <p>Line selected: {selectedMegaline}</p>
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
