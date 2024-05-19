import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products?limit=8",
        params,
      }),
      providesTags: ["Product"],
    }),
    // Get search
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        method: "GET",
        params,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSearchProductsQuery } = productApi;
