/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

export interface IFormUserFeedbackProps {}

export default function FormUserFeedback() {
  const [feedbacks, setFeedbacks] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('feedbacks', feedbacks)
  }

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setFeedbacks(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
