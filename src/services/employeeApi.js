// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EmployeeApi = createApi({
  reducerPath: 'EmployeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4400/employees' }),
  endpoints: (builder) => ({
    getEmployees : builder.query({
      query: (name) => `/`,
    }),
    AddEmployee:builder.mutation({
      query: (emp) => ({
        url: ``,
        method: 'POST',
        body: emp,
      }),

    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetEmployeesQuery,useAddEmployeeMutation} = EmployeeApi