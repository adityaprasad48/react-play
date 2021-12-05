import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const counterSlice = createSlice({
	initialState,
	name: 'counter',
	reducers: {
		incrementCounter: (state) => {
			state.count += 1;
		},
		decrementCounter: (state) => {
			state.count -= 1;
		},
		resetCounter: () => initialState,
	},
});

export default counterSlice.reducer;

export const { incrementCounter, decrementCounter, resetCounter } =
	counterSlice.actions;

export const selectCount = (state) => state.counter.count;
