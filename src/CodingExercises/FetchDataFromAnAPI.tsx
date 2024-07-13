import React, { useEffect, useState } from 'react'

export interface IFetchDataFromAnAPIProps {}

type UserData = {
  name: string
  website: string
  email: string
  phone: number
}

export default function FetchDataFromAnAPI() {
  const url = 'https://jsonplaceholder.typicode.com/users/1'
  const [userData, setUserData] = useState<UserData>()

  const getUserData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUserData(data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div>
      <h1>User data:</h1>
      <div id="name">name: {userData?.name}</div>
      <div id="website">web: {userData?.website}</div>
      <div id="email">email: {userData?.email}</div>
      <div id="phone">phone: {userData?.phone}</div>
    </div>
  )
}
