import React, { useState } from 'react'

export interface ICreateCounterAppProps {}

export default function CreateCounterApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Counter:{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  )
}
