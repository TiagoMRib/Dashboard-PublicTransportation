import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function AltLineChart({ data, data2 }) {
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
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Define the line function
    const line = d3
      .line()
      .x(d => x((d.ti + d.tf) / 7200)) // 7200 = (3600 * 2 (para ficar no meio))
      .y(d => y(d.value));

    // Set the domains for the x and y scales
    x.domain(d3.extent(data.data, d => (d.ti + d.tf) / 7200));
    y.domain([0, d3.max(data.data, d => d.value)]);

    // Add the x axis to the graph
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d => d + 'h'));

    // Add the y axis to the graph
    g.append('g').call(d3.axisLeft(y));

    // Add the line to the graph
    g.append('path')
      .datum(data.data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    if (data2)
    {
      g.append('path')
      .datum(data2.data)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 1.5)
      .attr('d', line);
    }

  }, [data, data2]);

  return <svg ref={svgRef} width={500} height={300}></svg>;
}

export default AltLineChart;
