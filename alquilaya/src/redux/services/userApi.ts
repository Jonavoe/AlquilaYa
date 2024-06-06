import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    getUserByEmail: builder.query<User, string>({
      query: (email) => `/users/email?email=${email}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByEmailQuery } = userApi;
