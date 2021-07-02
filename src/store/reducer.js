const initialState = { nodes: [], links: [] };

const sankeyDataReducer = (state = initialState, action) => {
  if (action.type === "FETCH_DATA") {
    return {
      nodes: action.payload.nodes,
      links: action.payload.links,
    };
  }
  if (action.type === "ADD_NODE") {
    return {
     ...state, 
     nodes: [{"name": action.payload}, ...state.nodes]
    };
  }
  if (action.type === "ADD_LINK") {
    return {
     ...state, 
     links: [ {
      "source": action.payload.source,
      "target": action.payload.target,
      "value": action.payload.value
    }, ...state.links]
    };
  }
  return state;
};
export default sankeyDataReducer;
