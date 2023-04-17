import {React, useRef, useEffect} from "react";
import * as d3 from "d3";

const MyBarChart = ({data, width, height}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        const margin = { top: 20, right: 20, bottom: 40, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
    
        const xScale = d3
          .scaleBand()
          .domain(data.map(d => d.x))
          .range([0, innerWidth])
          .padding(0.1);
    
        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.y)])
          .nice()
          .range([innerHeight, 0]);
    
        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    
        g.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', `translate(0,${innerHeight})`)
          .call(d3.axisBottom(xScale));

        g.append('text')
          .attr('class', 'axis-labelx')
          .attr('text-anchor', 'middle')
          .attr('x', innerWidth / 2)
          .attr('y', innerHeight + margin.top + 15)
          .text('Label');
    
        g.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(yScale).ticks(5));

        g.append('text')
          .attr('class', 'axis-labely')
          .attr('text-anchor', 'middle')
          .attr('x', margin.top - innerHeight / 2)
          .attr('y', -margin.left / 2)
          .attr('transform', 'rotate(-90)')
          .text('Quantity');

        g.selectAll('.bar')
          .data(data)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => xScale(d.x))
          .attr('y', d => yScale(d.y))
          .attr('width', xScale.bandwidth())
          .attr('height', d => innerHeight - yScale(d.y));
    }, [data, width, height]);

    return (
        <svg ref={chartRef} width={width} height={height}>
            <g className="chart-area"/>
        </svg>
    );
};

export default MyBarChart;