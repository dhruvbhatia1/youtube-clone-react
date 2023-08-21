import React from "react";

// create dummy data

const commentData = [
	{
		name: "John Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		replies: [
			{
				name: "Akshay",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			},
			{
				// create dummy data with different names
				name: "Dhruv",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
				replies: [
					{
						name: "Trisha",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
						replies: [
							{
								name: "Dhruv",
								text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
							},
						],
					},
					{
						name: "Rahul",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
					},
				],
			},
		],
	},
	{
		name: "Jane Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		replies: [
			{
				name: "Akshay",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			},
		],
	},
	{
		name: "Kunal",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		replies: [],
	},
	{
		name: "Aryan",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
	},
];

const Comment = ({ data }) => {
	const { name, text, replies } = data;
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

const CommentsContainer = () => {
	return (
		<div className="m-5 p-2">
			<h1 className="text-2xl font-bold">Comments</h1>
			<CommentList comments={commentData} />
		</div>
	);
};

export default CommentsContainer;
