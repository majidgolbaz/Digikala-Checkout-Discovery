import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { IProductProps, IProductArray } from "../utils/types";

const initialProductState: IProductArray = {
  productList: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    addProduct(state, action: PayloadAction<IProductProps>) {
      state.productList.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export { store };
export const { addProduct } = productsSlice.actions;
