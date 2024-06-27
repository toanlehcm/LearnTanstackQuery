import * as React from 'react'
import { useForm } from 'react-hook-form'

export interface ILearnReactHookFormBeierLouProps {}

let renderCount = 0

type FormValues = {
  firstName: string
  lastName: string
}

export default function LearnReactHookFormBeierLou() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  renderCount++

  register('firstName')
  register('lastName')

  // console.log('errors', errors)
  // console.log('watch()', watch())
  console.log('watch(firstName)', watch('firstName'))

  return (
    <>
      <div>Learn React Hook Form Beier Lou</div>
      <div>render Count: {renderCount}</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log('data', data)
        })}
      >
        <input {...register('firstName', { required: 'this is required' })} placeholder="firstName" />
        <p>{errors.firstName?.message}</p>

        <input
          {...register('lastName', {
            required: 'this is required',
            minLength: {
              value: 5,
              message: 'min length is 5',
            },
          })}
          placeholder="lastName"
        />
        <p>{errors.lastName?.message}</p>

        <input type="submit" />
      </form>
    </>
  )
}
