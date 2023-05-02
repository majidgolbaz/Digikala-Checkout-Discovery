import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductProps } from "../../utils/types";
import { RootState } from "../store";

// Define a type for the slice state
interface productState {
  products: IProductProps[];
}

// Define the initial state using that type
const initialState: productState = {
  products: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductProps>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const products = state.products.filter((product) => product.id !== id);
      state.products = products;
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export const selectProduct = (state: RootState) => state.products.products;

export default productsSlice.reducer;
