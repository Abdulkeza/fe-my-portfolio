/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		ooops: 1,
		count: 0,
	},

	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},

		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
