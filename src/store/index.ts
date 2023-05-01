import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { IProductProps } from "../utils/types";

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
    addProduct(state, action: PayloadAction<IProductProps>) {
      state.products.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
export const { addProduct } = productsSlice.actions;
