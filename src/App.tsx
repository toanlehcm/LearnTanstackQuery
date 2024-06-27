import { Outlet, NavLink } from 'react-router-dom'

const App: React.FC = () => {
  const urlList = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'profile',
      label: 'Profile',
    },
    {
      path: 'tnx-details',
      label: 'Transaction Details',
    },
    {
      path: 'learn-react-hook-form-beier-lou',
      label: 'Learn React Hook Form Beier Lou',
    },
  ]

  return (
    <div className="App">
      <ul>
        {urlList.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'blue' : 'normal',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  )
}

export default App
