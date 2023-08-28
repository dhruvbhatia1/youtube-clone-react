import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
	name: "chat",
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			if (state.messages.length >= OFFSET_LIVE_CHAT) {
				state.messages.shift();
			}
			state.messages.push(action.payload);
		},
		resetMessages: (state) => {
			state.messages = [];
		},
	},
});

export const { addMessage, resetMessages } = chatSlice.actions;
export default chatSlice.reducer;
