import { useState } from "react";
import "./App.css";

// import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Timer from "./mobx";

const CounterButton = () => {
  const [count, setCount] = useRecoilState(counterState);
  const countToBeConsumed = useRecoilValue(countSelector);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      count: {countToBeConsumed} {count}
    </>
  );
};

// A SINGLE STATE AND THAT IS SHARED BY ALL COPIES OF 1 COMPONENT.
//  Atoms is state, selectors for view
const counterState = atom({ key: "count", default: 0 });

const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    return get(counterState);
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Mobx/Recoil + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <RecoilRoot>
        <CounterButton />
      </RecoilRoot>

      <TimerButton timer={timer} />
    </>
  );
}

const timer = new Timer();

const TimerButton = (props: { timer: Timer }) => {
  const [time, setTime] = useState<number>(1);
  return (
    <>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <button onClick={() => props.timer.increment(time)}>Start</button>
    </>
  );
};

export default App;
