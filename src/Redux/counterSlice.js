import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    // count: 1,
    countProduct: 4,
    allPrice: 2200,
  },
  reducers: {
    incremetPhone: (state, action) => {
      state.countProduct += 1;
      // state.count += 1;
      state.allPrice += action.payload;
    },
    decrementPhone: (state, action) => {
      state.countProduct -= 1;
      // state.count -= 1;
      state.allPrice -= action.payload;
    },
    clearAll: (state) => {
      state.countProduct = 0;
      state.allPrice = 0;
    },
  },
});

export const { incremetPhone, decrementPhone, clearAll } = counterSlice.actions;
export default counterSlice.reducer;
