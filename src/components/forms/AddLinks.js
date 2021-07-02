import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLink } from "../../store/actions";

function AddLinks() {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);
  const sourceRef = useRef();
  const targetRef = useRef();
  const valueRef = useRef();
  const [error, setError] = useState(null);

  const onSubmit = () => {
    if (sourceRef.current.value === "") {
      setError("Add Source");
    } else if (targetRef.current.value === "") {
      setError("Add Target");
    } else if (valueRef.current.value === "") {
      setError("Add Value");
    } else {
      dispatch(
        addLink({
          source: nodes.findIndex((x) => x.name === sourceRef.current.value),
          target: nodes.findIndex((x) => x.name === targetRef.current.value),
          value: +valueRef.current.value,
        })
      );
      clearFields();
      setError(null);
    }
  };

  const clearFields = () => {
    sourceRef.current.value = "";
    targetRef.current.value = "";
    valueRef.current.value = "";
  };

  return (
    <div className=" container my-4">
      <div className="card p-4">
        <div className="mb-3">
          <label htmlFor="source">Select Source</label>
          <select
            id="source"
            className="form-select"
            aria-label="Default select example"
            ref={sourceRef}
          >
            {nodes.map((node, i) => (
              <option key={node.name + i} value={node.name}>
                {node.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="trget">Select Target</label>
          <select
            id="trget"
            className="form-select"
            aria-label="Default select example"
            ref={targetRef}
          >
            {nodes.map((node, i) => (
              <option key={node.name + i} value={node.name}>
                {node.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Add Value"
            aria-label="Add Value"
            ref={valueRef}
          />
        </div>
        {error && <span className="text-danger mb-2">{error}</span>}
        <button type="button" className="btn btn-dark " onClick={onSubmit}>
          Add Node
        </button>
      </div>
    </div>
  );
}

export default AddLinks;
