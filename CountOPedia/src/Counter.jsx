import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    count += 1;
    console.log(count);
  }
  function handleDecrement() {
    count -= 1;
    console.log(count);
  }

  return (
    <div className="row text-white container">
      Counter : {count}
      <button onClick={handleIncrement} className="btn btn-success m-2">
        +1
      </button>
      <button onClick={handleDecrement} className="btn btn-danger m-2">
        -1
      </button>
    </div>
  );
}

export default Counter;
