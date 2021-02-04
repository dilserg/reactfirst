import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'f3a0a3ec-dd9a-48c6-8dde-c7a136542315'}
});

const userAPI = {
  getUsers: (selectedPage,usersOnOnePage) => instance.get(`users?page=${selectedPage}&count=${usersOnOnePage}`),
  
  getCount: () => instance.get(`users`),
  
  unfollow: id => instance.delete(`follow/${id}`),
  
  follow: id => instance.post(`follow/${id}`),
  
  getProfile: id => instance.get(`profile/${id}`),
  
  authMe: () => instance.get(`auth/me`),
  
  getStatus: (id) => instance.get(`profile/status/${id}`),
  
  setNewStatus: (status) => instance.put(`profile/status`, {status:status}),
  
  authLogin: (data)=> instance.post(`auth/login`, {email:data.email,password:data.password, rememberMe:data.rememberMe}),
  
  LogOut : ()=> instance.delete(`auth/login`)
};

export default userAPI;