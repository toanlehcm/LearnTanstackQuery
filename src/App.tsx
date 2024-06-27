import { useState } from 'react'
import { useProfile } from './hooks'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { data: userProfile, isLoading, isError, error } = useProfile({ enabled: isLoggedIn })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  return (
    <div>
      <h2>User Profile</h2>

      <button onClick={toggleLogin}>Toggle Login</button>

      {isLoggedIn && userProfile && (
        <>
          <p>Name: {userProfile?.name}</p>
          <p>Email: {userProfile?.email}</p>
        </>
      )}
    </div>
  )
}

export default App
