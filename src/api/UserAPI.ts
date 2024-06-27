import axiosClient from './AxiosClient'

export interface UserProfile {
  id: string
  name: string
  city: string
  email: string
}
export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
