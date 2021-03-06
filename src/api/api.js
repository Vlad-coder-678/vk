import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "98f61765-db34-40a8-b8a8-e51760d3d601",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.log("Obsolete method. Please used profileAPI object.");
    return profileApi.getProfile(userId);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  getMeData() {
    return instance.get(`auth/me`);
  },
};
