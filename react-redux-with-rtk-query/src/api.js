import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonServerApi = createApi({
    reducerPath: 'jsonServerApi',
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001",
        prepareHeaders: (headers) => {
          headers.set("Content-Type", "application/json");
          return headers;
        },
    }),
    endpoints: (builder) => ({
        getCompanies: builder.query({
          query: () => "/companies",
          providesTags: ['Company'],
        }),
        addNewCompany: builder.mutation({
          query: (company) => ({
            url: '/companies',
            method: 'POST',
            body: company
          }),
          invalidatesTags: ['Company'],
        }),
        deleteCompany: builder.mutation({
          query: (id) => ({
            url: `/companies/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags: ['Company'],
        })
      }),
});

export const { useGetCompaniesQuery, useAddNewCompanyMutation, useDeleteCompanyMutation  } = jsonServerApi;
