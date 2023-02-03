import { useDispatch, useSelector } from "react-redux/es/exports";
import { increment } from "../store";

export default function Increment() {
  const dispatch = useDispatch();

  return (
    <div className="incrementDiv">
      <button onClick={() => dispatch(increment({}))}>+</button>
    </div>
  );
}
