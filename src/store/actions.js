import * as d3 from "d3";

export const fetchSankeyData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
export const addNode = (data) => {
  return {
    type: "ADD_NODE",
    payload: data,
  };
};

export const addLink = (data) => {
  return {
    type: "ADD_LINK",
    payload: data,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    d3.json("/data.json").then((data) => {
      dispatch(fetchSankeyData(data));
    });
  };
};
