import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";

const LineChart = ({ data, width, height }) => {
  const ref = useRef();

  const sortedData = useMemo(() => {
    return data
      .slice() // make a copy to avoid modifying the original data
      .sort((a, b) => {
        // convert time strings to dates and compare
        return new Date(`1970-01-01T${a.x}:00`) - new Date(`1970-01-01T${b.x}:00`);
      })
      .map((d) => {
        return {
          ...d,
          xValue: new Date(`1970-01-01T${d.x}:00`).getTime() // convert time to numeric value
        };
      });
  }, [data]);

  useEffect(() => {
    const svg = d3.select(ref.current);

    const margin = { top: 20, right: 60, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const zValues = [...new Set(sortedData.map((d) => d.z))]; // get unique values of z
    const colorScale = d3.scaleOrdinal()
      .domain(zValues)
      .range(d3.schemeCategory10);

    // create a separate line for each z value
    zValues.forEach((zValue) => {
      const filteredData = sortedData.filter((d) => d.z === zValue);

      const xScale = d3.scaleTime()
        .domain(d3.extent(filteredData, (d) => d.xValue))
        .range([0, innerWidth]);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(filteredData, (d) => d.y) * 1.1])
        .range([innerHeight, 0]);

      const lineGenerator = d3.line()
        .x((d) => xScale(d.xValue))
        .y((d) => yScale(d.y));

      svg.append("path")
        .datum(filteredData)
        .attr("fill", "none")
        .attr("stroke", colorScale(zValue))
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);
    });

    // render x and y axis
    const xScale = d3.scaleTime()
      .domain(d3.extent(sortedData, (d) => d.xValue))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(sortedData, (d) => d.y) * 1.1])
      .range([innerHeight, 0]);

    svg.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(d3.timeHour.every(1))).selectAll("text")
      .attr("x", 15);

      
    svg.append("g")
      .call(d3.axisLeft(yScale));


    // render legend
    const legend = svg.append("g")
    .attr("transform", `translate(${innerWidth + 10}, 0)`);

    legend.selectAll("rect")
    .data(zValues)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * 25)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", (d) => colorScale(d));

    legend.selectAll("text")
    .data(zValues)
    .enter()
    .append("text")
    .attr("x", 30)
    .attr("y", (d, i) => i * 25 + 15)
    .text((d) => d);

  }, [sortedData, height, width]);


  return (
    <svg ref={ref} width={width} height={height} />
  );
};

export default LineChart;
