import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function AltBarChart({ data, data2 }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = svg.attr('width') - margin.left - margin.right;
    const height = svg.attr('height') - margin.top - margin.bottom;

    // Append a group element to the svg to translate the origin to the top-left margin
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Set the scales for the x and y axes
    const x = d3.scaleBand().range([0, width]).padding(0.3);
    const y = d3.scaleLinear().range([height, 0]);

    
    // Combine the data arrays to find the maximum value
    const combinedData = data.data.concat(data2?.data || []);
    const maxValue = d3.max(combinedData, d => d.value);

    // Set the domains for the x and y scales
    x.domain(combinedData.map(d => (d.ti + d.tf) / 7200));
    y.domain([0, maxValue]);

    // Add the x axis to the graph
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d => d + 'h'));

    // Add the y axis to the graph
    g.append('g').call(d3.axisLeft(y));

    // Add the bars for data
    g.selectAll('.bar')
      .data(data.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x((d.ti + d.tf) / 7200))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth() / 2)
      .attr('height', d => height - y(d.value))
      .attr('fill', 'steelblue');

    // Add the bars for data2
    if (data2) {
      g.selectAll('.bar2')
        .data(data2.data)
        .enter()
        .append('rect')
        .attr('class', 'bar2')
        .attr('x', d => x((d.ti + d.tf) / 7200) + x.bandwidth() / 2)
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth() / 2)
        .attr('height', d => height - y(d.value))
        .attr('fill', 'green');
    }
  }, [data, data2]);

  return <svg ref={svgRef} width={500} height={300}></svg>;
}

export default AltBarChart;
