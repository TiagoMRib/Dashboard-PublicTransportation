import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ data, width, height }) => {
  const ref = useRef();

  const sortedData = useMemo(() => {
    return data
      .slice() // make a copy to avoid modifying the original data
      .sort((a, b) => {
        return new Date(`1970-01-01T${a.x}:00`) - new Date(`1970-01-01T${b.x}:00`);
      })
      .map((d) => {
        return {
          ...d,
          xValue: new Date(`1970-01-01T${d.x}:00`).getTime()
        };
      });
  }, [data]);

  useEffect(() => {
    const svg = d3.select(ref.current);

    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleTime()
      .domain(d3.extent(sortedData, (d) => d.xValue))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(sortedData, (d) => d.y) * 1.1])
      .range([innerHeight, 0]);

    const zValues = [...new Set(sortedData.map((d) => d.z))];
    const colorScale = d3.scaleOrdinal()
      .domain(zValues)
      .range(d3.schemeCategory10);

    svg.selectAll("circle")
      .data(sortedData)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.xValue))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 5)
      .attr("fill", (d) => colorScale(d.z))
      .attr("opacity", 0.7);

    svg.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(d3.timeHour.every(1)))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "0.0em")
      .attr("dy", "1em")
      .attr("transform", "rotate(-65)");

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


    // Add chart title
    /* svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top)
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .text("Scatter Plot Chart"); */
  }, [sortedData, height, width]);

  return (
    <svg ref={ref} width={width} height={height} />
  );
};

export default ScatterPlot;
