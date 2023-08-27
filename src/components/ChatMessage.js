import React from "react";

const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center shadow-sm p-2">
			<img
				className="h-8"
				src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
				alt="user-icon"
			/>

			<span className="font-bold px-2 text-sm">{name}</span>
			<span className="text-sm">{message}</span>
		</div>
	);
};

export default ChatMessage;
