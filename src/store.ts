import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { initval: 0, input: 0 } };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.initval += 1;
    },
    decrement: (state, action) => {
      state.value.initval -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value.initval += action.payload.input;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const incrementAsync = (amount: any) => (dispatch: any) => {
  setTimeout(() => {
    console.log(amount);
    dispatch(incrementByAmount(amount));
  }, 1000);
};
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
