//multiple stores (domain state, data), tracks updates automatically using state as observables,
//state is mutable/impure.

// Action are any piece of code that changes the state
// Anything derived from the state without any further interaction is a derivation/computation. They are automatically updated when state changes, by subscribing to observables (Rendering, Serialisation)-->computed, observable
// Reaction (i/o, dom updates, network)-->autorun

// With MobX-->observer(props=><ReactComponent />) HOC that tracks all changes to observerables of the ReactComponent, makeObservable,extendObservable(this,{...}),makeAutoObservable(),
// 1. No unnecessary re-renders with this technique
// 2. No need to use selectors to access deep state...State can be anywhere, but uopdates will take place when state is changed

// <TimerView secondsPassed={myTimer.secondsPassed} />
// This cant be done...We have to pass the observable only as a prop

import { makeObservable, observable, action } from "mobx";

export default class Timer {
  secondsPassed: number = 0;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      increment: action,
    });
  }

  increment(val: number) {
    this.secondsPassed=val;
  }
}
