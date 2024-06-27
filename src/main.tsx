import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProfilePage from './pages/profile.tsx'
import TnxDetails from './pages/TnxDetails.tsx'
import LearnReactHookFormBeierLou from './pages/LearnReactHookFormBeierLou/index.tsx'

// create once with default options. queryClient is global instance.
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'tnx-details',
        element: <TnxDetails />,
      },
      {
        path: 'learn-react-hook-form-beier-lou',
        element: <LearnReactHookFormBeierLou />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
