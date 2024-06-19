import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: {
    value: "0",
  },
  reducers: {
    currentNumber: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += action.payload;
    },
    clearNumber: state => {
      state.value = "0";
    },
    emptyNumber: state => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentNumber, clearNumber, emptyNumber } = numberSlice.actions;

export default numberSlice.reducer;
