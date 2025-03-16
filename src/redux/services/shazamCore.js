import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '014aff168bmsh1d57d26e00dfb61p1e6b5ajsn7f6902699980',
//       'x-rapidapi-host': 'shazam-core7.p.rapidapi.com'
//     }
//   };

//   fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "014aff168bmsh1d57d26e00dfb61p1e6b5ajsn7f6902699980"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "charts/get-top-songs-in-world" }),
  }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;