import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IActualData, IProductProps } from "../../../utils/types";

const BASE_URL = "https://dummyjson.com";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // ? Query: Get All Products
    getAllProducts: builder.query<IActualData, number>({
      query: (skip) => `/products?skip=${skip}&limit=9 `,
    }),
    // ? Query: Get a single product
    getSingleProduct: builder.query<IProductProps, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
