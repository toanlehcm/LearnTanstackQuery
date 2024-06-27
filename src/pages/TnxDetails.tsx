import { useLocation } from 'react-router-dom'
import { useTnxDetails } from '@/hooks'

export default function TnxDetails() {
  const { search } = useLocation()
  const tnxId = new URLSearchParams(search).get('tnxId') || ''

  const { data, isLoading, isError } = useTnxDetails(tnxId!)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching transaction details</div>
  }

  return (
    <div>
      <h1>Transaction Details</h1>
      <p>Transaction ID: {data?.id}</p>
      <p>Amount: {data?.amount}</p>
      <p>Status: {data?.status}</p>
    </div>
  )
}
