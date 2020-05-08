import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY" : "97771d01-b7c4-41cb-8ae9-e52b1b7430fa"
    }
});

export const usersAPI = {
    getUsers: async ({currentPage, pageSize}) => {
        let response = await axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    followUser: async userId => {
        let response = await axiosInstance.post(`/follow/${userId}`);
        return response.data;
    },
    unFollowUser: async userId => {
        let response = await axiosInstance.delete(`/follow/${userId}`);
        return response.data;
    },
};

export const profileAPI = {
    getProfile: async userId => {
        let response = await axiosInstance.get(`/profile/${userId}`);
        return response.data;
    },
    getStatus: async userId => {
        let response = await axiosInstance.get(`/profile/status/${userId}`);
        return response.data;
    },
    updateStatus: async status => {
        let response = await axiosInstance.put(`/profile/status`, {status});
        return response.data;
    }
};

export const authAPI = {
    auth: async () => {
        let response = await axiosInstance.get(`/auth/me`);
        return response.data;
    },
    login: async loginData => {
        let response = await axiosInstance.post('/auth/login', loginData);
        return response.data;
    },

    logout: async () => {
        let response = await axiosInstance.delete('/auth/login');
        return response.data;
    }
};