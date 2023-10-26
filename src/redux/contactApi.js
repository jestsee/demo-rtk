/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/'
});

const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery,
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts'
    })
  })
});

export const { useGetContactsQuery } = contactApi;
export default contactApi;
