import { useDispatch, useSelector } from "react-redux/es/exports";
import { decrement } from "../store";

export default function Decrement() {
  const dispatch = useDispatch();
  return (
    <div className="decrementDiv">
      <button onClick={() => dispatch(decrement({}))}>-</button>
    </div>
  );
}
