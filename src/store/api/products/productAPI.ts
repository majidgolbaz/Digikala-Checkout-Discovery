import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProductProps } from "../../../utils/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // ? Query: Get All Products
    getAllProducts: builder.query<IProductProps[], void>({
      query() {
        return "products";
      },
    }),
    // ? Query: Get a single product
    getSingleProduct: builder.query<IProductProps, string>({
      query(id) {
        return `products/${id}`;
      },
    }),
    // ? Mutation: Create a product
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
