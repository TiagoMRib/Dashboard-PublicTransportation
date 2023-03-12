import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function BarChart(props) {
  const [chartData, setChartData] = useState(props.chartData);

  useEffect(() => {
    setChartData(props.chartData);
  }, [props.chartData]);

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City',
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: defaultProps.displayTitle,
            text: 'Largest Cities In ' + defaultProps.location,
            fontSize: 25,
          },
          legend: {
            display: defaultProps.displayLegend,
            position: defaultProps.legendPosition,
          },
        }}
      />

      <Line
        data={chartData}
        options={{
          title: {
            display: defaultProps.displayTitle,
            text: 'Largest Cities In ' + defaultProps.location,
            fontSize: 25,
          },
          legend: {
            display: defaultProps.displayLegend,
            position: defaultProps.legendPosition,
          },
        }}
      />

      <Pie
        data={chartData}
        options={{
          title: {
            display: defaultProps.displayTitle,
            text: 'Largest Cities In ' + defaultProps.location,
            fontSize: 25,
          },
          legend: {
            display: defaultProps.displayLegend,
            position: defaultProps.legendPosition,
          },
        }}
      />
    </div>
  );
}

export default BarChart;
