import React, { useState } from 'react'

export interface ISumOfTwoNumberProps {}

export default function SumOfTwoNumber() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      num1
      <input
        type="number"
        value={num1}
        // onChange={(e) => setNum1(parseInt(e.target.value))}
        onChange={(e) => {
          console.log('e.target.value--1: ', typeof e.target.value)
          // console.log('+e.target.value', typeof +e.target.value)

          setNum1(+e.target.value)
        }}
      />
      num2
      <input
        type="number"
        value={num2}
        onChange={(e) => {
          console.log('e.target.value--2: ', typeof e.target.value)
          setNum2(parseInt(e.target.value))
        }}
      />
      <span>{total}</span>
      <button
        onClick={() => {
          console.log('typeof num1', typeof num1)
          console.log('typeof num2', typeof num2)

          setTotal(num1 + num2)
          console.log('typeof total', typeof total)
        }}
      >
        Sum
      </button>
    </div>
  )
}
