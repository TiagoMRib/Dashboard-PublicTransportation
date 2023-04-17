import React from 'react';
import './styles/Path.css';

const Path = ({ stops }) => {
  const colors = ['#ff6b6b', '#ffb347', '#4ecdc4', '#7f7f7f', '#8e44ad'];
  const sections = stops.map((string, index) => (
    <div
      key={index}
      className="section"
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      {string}
    </div>
  ));

  return <div className="path">{sections}</div>;
};

export default Path;
