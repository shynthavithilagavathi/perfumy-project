import { useState } from "react";
import "./Counter.css"; 

function Counter() {
  var [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div className="container">
      <h1 className="title"> Counter Application</h1>
      <p className="count">{count}</p>
      <div className="button-group">
        <button onClick={increment} className="btn increase">
          Increment
        </button>
        <button onClick={decrement} className="btn decrease">
          Decrement
        </button>
        <button onClick={reset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;


