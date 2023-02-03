import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { incrementAsync, incrementByAmount } from "../store";

export default function InputFiled() {
  const [inputVal, setinputVal] = useState("");
  // const finalVal = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="inputDiv">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
        />
      </div>
      <div className="decrementDiv">
        <button
          onClick={() =>
            dispatch(incrementByAmount({ input: Number(inputVal) }))
          }
        >
          Add Amount
        </button>
      </div>
      <div className="addAsyncDiv">
        <button
          onClick={() => dispatch(incrementAsync({ input: Number(inputVal) }))}
        >
          Add Async
        </button>
      </div>
    </>
  );
}
