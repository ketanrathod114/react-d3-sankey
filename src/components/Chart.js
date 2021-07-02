import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Sankey from "./sankey/Sankey";
import { fetchData } from '../store/actions'

function Chart() {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);
  const links = useSelector((state) => state.links);
  const data = {
    'nodes' : [...nodes],
    'links' : [...links]
  }
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const height = (window.innerHeight > 1000 ? 1000 : window.innerHeight) - 120;
  const width = window.innerWidth < 992 ? window.innerWidth : window.innerWidth-window.innerWidth/3;
  return (
  
      <svg height={height} width={width} style={{paddingTop: 20}}>
        {data.nodes.length>1 && <Sankey data={data} width={width} height={height} />}
      </svg>

  );
}

export default Chart;
