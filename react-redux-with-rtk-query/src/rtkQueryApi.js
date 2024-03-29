import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkQueryApi = createApi({
  reducerPath: 'rtkQueryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({})
});

export const patchQueries = (queriesToPatch) => {
  const extendedRTKQueryApi = rtkQueryApi.injectEndpoints({
      endpoints: (builder) => ({
          ...queriesToPatch(builder)
      }),
      overrideExisting: false,
  });
  return extendedRTKQueryApi;
};