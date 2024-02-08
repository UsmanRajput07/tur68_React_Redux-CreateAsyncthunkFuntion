import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productsApi = createAsyncThunk("products", async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  return data;
});
const STATUS = {
  isLoading: false,
  data: [],
  isError: false,
};

const ProductSlice = createSlice({
  name: "product",
  initialState: STATUS,
  extraReducers: (builder) => {
    builder.addCase(productsApi.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    }),
      builder.addCase(productsApi.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(productsApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default ProductSlice.reducer;
