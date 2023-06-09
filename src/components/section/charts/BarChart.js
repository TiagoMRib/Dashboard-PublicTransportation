
import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";

const BarGraph = ({ data, width, height }) => { 
  const ref = useRef();

  const xScale = useMemo(() =>
    d3.scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, width])
      .padding(0.5),
    [data, width]
  );

  const yScale = useMemo(() =>
    d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) * 1.1]) // add 10% padding to the top value
      .range([height, 0]),
    [data, height]
  );

  useEffect(() => {
    const svg = d3.select(ref.current);

    const margin = { top: 20, right: 60, bottom: 60, left: 60 };
    //const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.select(".x-axis")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale));

    svg.select(".y-axis")
      .call(d3.axisLeft(yScale));

    const bars = svg.selectAll(".bar")
      .data(data);

    bars.enter().append("rect")
      .attr("class", "bar")
      .merge(bars)
      .attr("x", (d) => xScale(d.x))
      .attr("width", xScale.bandwidth())
      .attr("y", (d) => yScale(d.y))
      .attr("height", (d) => innerHeight - yScale(d.y)); 

    const labels = svg.selectAll(".label")
      .data(data);

    labels.enter().append("text")
      .attr("class", "label")
      .merge(labels)
      .attr("x", (d) => xScale(d.x) + xScale.bandwidth() / 2)
      .attr("y", height - margin.bottom / 2 + 5)
      .attr("text-anchor", "middle")
      .text((d) => d.label);

    const valueGroup = svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`);

    const valueScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) * 1.1]) // add 10% padding to the top value
      .range([innerHeight, 0]);

    const yAxis = d3.axisLeft(valueScale).ticks(5);

    valueGroup.select(".value-axis").remove(); // remove old axis on re-render
    valueGroup.append("g")
      .attr("class", "value-axis")
      .call(yAxis);

    /*const values = valueGroup.selectAll(".value")
      .data(data); 

    values.enter().append("text")
      .attr("class", "value")
      .merge(values)
      .attr("x", -margin.left / 2)
      .attr("y", (d) => valueScale(d.y))
      .attr("text-anchor", "end")
      .text((d) => d.y); */

  }, [data, width, height, xScale, yScale]); 



  return (
    <svg ref={ref} width={width} height={height}>
      <g className="x-axis" />
    </svg>
  );
};

export default BarGraph;
