import { useProfile } from './hooks'

const App: React.FC = () => {
  const { data: userProfile, isLoading, isError, error } = useProfile()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile && (
        <>
          <p>Name: {userProfile?.name}</p>
          <p>Email: {userProfile?.email}</p>
        </>
      )}
    </div>
  )
}

export default App
