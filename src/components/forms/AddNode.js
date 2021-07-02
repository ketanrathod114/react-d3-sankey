import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNode } from "../../store/actions";

function AddNode() {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const [error, setError] = useState(null);

  const onSubmit = () => {
    if (nameRef.current.value === "") {
      setError("Add Name");
    } else {
      console.log(nameRef.current.value);
      dispatch(addNode(nameRef.current.value));
      clearFields();
      setError(null);
    }
  };

  const clearFields = () => {
    nameRef.current.value = "";
  };

  return (
    <div className=" container my-4">
      <div className="card p-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Name"
            aria-label="Add Name"
            ref={nameRef}
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

export default AddNode;
