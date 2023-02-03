import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CounterShower from "./Compenets/CounterShower";
import AddAmount from "./buttons/AddAmount";
import AddAsync from "./buttons/AddAsync";
import Increment from "./buttons/Increment";
import Decrement from "./buttons/Decrement";
import InputFiled from "./Compenets/InputFiled";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <section className="countShown">
          <Increment />
          <CounterShower />
          <Decrement />
        </section>
        <section className="bottomSec">
          <InputFiled />
          {/* <AddAmount /> */}
          {/* <AddAsync /> */}
        </section>
      </div>
    </Provider>
  );
}

export default App;
