// plugins/axios.js

import axios from 'axios';

export default function ({ $axios, redirect, error }, inject) {
  const axiosInstance = axios.create({
    baseURL: 'https://lorapi.pythonanywhere.com',
  });

  axiosInstance.interceptors.request.use((config) => {
    // You can add any request interceptors here
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      // You can add any response interceptors here
      return response;
    },
    (error) => {
      // You can handle errors here
      return Promise.reject(error);
    }
  );

  inject('axios', axios);
}

