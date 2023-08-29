import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, resetMessages } from "../utils/chatSlice";
import { generateRandomComment, generateRandomName } from "../utils/helper";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");

	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const timer = setInterval(() => {
			// API Polling
			// console.log("API Polling");
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: generateRandomComment(),
				})
			);
		}, 2000);

		return () => {
			clearInterval(timer);
			dispatch(resetMessages());
		};
	}, []);

	return (
		<>
			<div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
				<div>
					{chatMessages.map((chatMessage, index) => (
						<ChatMessage
							key={index}
							name={chatMessage.name}
							message={chatMessage.message}
						/>
					))}
				</div>
			</div>
			<form
				className="w-full p-2 ml-2 shadow-sm bg-slate-50"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessage({
							name: "You",
							message: liveMessage,
						})
					);
					setLiveMessage("");
				}}
			>
				<input
					className="px-2 py-1 w-3/4 border border-black rounded-md"
					type="text"
					value={liveMessage}
					placeholder="Chat..."
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button className="px-2 mx-4 py-1 border border-gray-300 rounded-md hover:bg-slate-200">
					Send
				</button>
			</form>
		</>
	);
};

export default LiveChat;
