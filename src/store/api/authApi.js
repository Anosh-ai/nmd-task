import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Demo API base URL - replace with your actual API
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: "/users/1", // Demo endpoint
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        // Demo transformation - replace with actual login logic
        const { email, password } = arg;
        if (email === "admin@demo.com" && password === "admin123") {
          return {
            user: {
              id: 1,
              name: "Admin User",
              email: "admin@demo.com",
              role: "admin",
            },
            token: "demo-admin-token-12345",
          };
        } else if (email === "user@demo.com" && password === "user123") {
          return {
            user: {
              id: 2,
              name: "Regular User",
              email: "user@demo.com",
              role: "user",
            },
            token: "demo-user-token-67890",
          };
        }
        throw new Error("Invalid credentials");
      },
      invalidatesTags: ["Auth"],
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response, meta, arg) => {
        // Demo transformation
        return {
          user: {
            id: Date.now(),
            name: arg.name,
            email: arg.email,
            role: "user",
          },
          token: `demo-token-${Date.now()}`,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
