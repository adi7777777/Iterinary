import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  function increment()
  {
    setCount(count+1);
  }

   function decrement()
  {
    setCount(count-1);
  }

   function reset()
  {
    setCount(0);
  }

  return (
    <div >
    <h1>{count}</h1>
     <button onClick={increment}>+</button><br/>
     <button onClick={decrement}>-</button><br/>
     <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
