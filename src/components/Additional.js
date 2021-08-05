import React, {useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext'
function Additional() {
  const { increaseCount} = useContext(CounterContext);
  return (
    <React.Fragment>
      <button onClick={increaseCount}>Additional</button>
    </React.Fragment>
  )
}

export default Additional
