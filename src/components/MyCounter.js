import React, {useState} from 'react'

function MyCounter() {
  const [count, setCount]= useState(0)
  const increaseCount=()=> setCount(count+1)
  const decreaseCount=()=> setCount(count-1)
  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default MyCounter
