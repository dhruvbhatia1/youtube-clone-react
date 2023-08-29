import React from "react";

// create dummy data

const commentData = [
	{
		name: "Alice",
		text: "This video is interesting.",
		replies: [
			{
				name: "Bob",
				text: "I agree, it caught my attention too.",
				replies: [
					{
						name: "Charlie",
						text: "What specifically did you find interesting?",
					},
					{
						name: "David",
						text: "I think it's the topic that's captivating.",
					},
				],
			},
			{
				name: "Eve",
				text: "It's a good video.",
			},
		],
	},
	{
		name: "Frank",
		text: "I enjoyed this game.",
		replies: [
			{
				name: "Grace",
				text: "Glad to hear that! What did you like about it?",
				replies: [
					{
						name: "Frank",
						text: "I liked the graphics and the gameplay.",
					},
				],
			},
			{
				name: "Holly",
				text: "I can't stop playing!",
				replies: [
					{
						name: "Isaac",
						text: "I can relate, it's addicting!",
					},
				],
			},
		],
	},
	{
		name: "Jack",
		text: "The recipe is simple and delicious.",
		replies: [
			{
				name: "Karen",
				text: "I'm glad you liked it! What other recipes have you tried?",
			},
		],
	},
	{
		name: "Liam",
		text: "Looking forward to watching this movie.",
	},
	{
		name: "Mia",
		text: "Loved this video!",
		replies: [
			{
				name: "Noah",
				text: "Me too! I'm a big fan of this channel.",
			},
		],
	},
];

// You can continue adding more comments and replies with generic content as needed.

const Comment = ({ data }) => {
	const { name, text } = data;
	return (
		<div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
			<img
				className="w-12 h-12"
				src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
				alt="user-icon"
			/>
			<div className="px-3">
				<p className="font-semibold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
	return comments?.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="pl-5 ml-5 border border-l-black">
				<CommentList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = ({ viewCount }) => {
	return (
		<div className="m-5 p-2">
			<h1 className="text-xl font-bold">Comments ({viewCount})</h1>
			<CommentList comments={commentData} />
		</div>
	);
};

export default CommentsContainer;
