import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '6d951170-266a-4e06-b164-b1633e23597c'}
});

const userAPI = {
  getUsers: (selectedPage) => instance.get(`users?page=${selectedPage}&count=5`),
  
  getCount: () => instance.get(`users`),
  
  unfollow: id => instance.delete(`follow/${id}`),
  
  follow: id => instance.post(`follow/${id}`),
  
  getProfile: id => instance.get(`profile/${id}`),
  
  authMe: () => instance.get(`auth/me`)
};

export default userAPI;