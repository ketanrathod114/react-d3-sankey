import React, { useState } from "react";
import * as d3 from "d3";
import { sankey } from "d3-sankey";
import SankeyNode from "./SankeyNode";
import SankeyLink from "./SankeyLink";

const Sankey = ({ data, width, height }) => {
const [highlightLinkIndexes, setHighlightLinkIndexes] = useState([])
  const { nodes, links } = sankey()
    .nodeWidth(15)
    .nodePadding(15)
    .extent([
      [1, 1],
      [width - 100, height - 100],
    ])(data);

  const color = d3.scaleOrdinal(d3.schemePastel1);
  const setHighlight = (values)=>{
    setHighlightLinkIndexes(values)
  }
  return (
    <g style={{ mixBlendMode: "multiply" }}>
      {nodes.map((node, i) => {
        return <SankeyNode
          {...node}
          onSetHighlight ={setHighlight}
          color={color(node.category === undefined ? node.name : node.category)}
          key={node.name}
        />
})}
      {links.map((link, i) => {
        return <SankeyLink
          key={i}
          i={i}
          link={link}
          highlightlink={highlightLinkIndexes}
          color={color(
            link.source.index === undefined ? link.name : link.source.index
          )}
        />
          })}
    </g>
  );
};

export default Sankey;
