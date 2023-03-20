import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarGraph = ({ data, width, height }) => { 
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    const margin = { top: 20, right: 60, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, innerWidth])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([innerHeight, 0]);

    svg
      .select(".x-axis")
      .attr("transform", 'translate(${innerHeight}, 0)')
      .call(d3.axisBottom(xScale));

    svg
      .select(".y-axis")
      .call(d3.axisLeft(yScale));

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.x))
      .attr("width", xScale.bandwidth())
      .attr("y", (d) => yScale(d.y))
      .attr("height", (d) => innerHeight - yScale(d.y));

    // add labels below bars
    svg
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => xScale(d.x) + xScale.bandwidth() / 2)
      .attr("y", innerHeight + margin.bottom / 2)
      .attr("text-anchor", "middle")
      .text((d) => d.label);

    // add value labels on the left side
    const valueGroup = svg.append("g").attr("transform", `translate(${margin.left}, 0)`);

    const valueScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([innerHeight, 0]);

    const yAxis = d3.axisLeft(valueScale).ticks(5);

    valueGroup.append("g").attr("class", "value-axis").call(yAxis);

    valueGroup
      .selectAll(".value")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "value")
      .attr("x", -margin.left / 2)
      .attr("y", (d) => valueScale(d.y))
      .attr("text-anchor", "end")
      .text((d) => d.y);

  }, []); // <- missing ")" here

  return (
    <svg ref={ref} width={width} height={height}>
      <g className="x-axis" />
    </svg>
  );
};


export default BarGraph;