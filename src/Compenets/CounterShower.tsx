import { useDispatch, useSelector } from "react-redux/es/exports";

export default function CounterShower() {
  const finalVal = useSelector((state: any) => state.counter.value.initval);
  return <div className="screenDiv">{finalVal}</div>;
}
