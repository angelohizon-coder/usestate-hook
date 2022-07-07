import React, {useState} from "react";

function App() {
  var [count, stateCount] = useState(0);

  function increase() {
    stateCount(count++);
  }

  function decrease() {
    stateCount(count--);
  }

  return(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App;
