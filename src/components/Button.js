import React from "react";

const Button = (props) => {
	const { name } = props;
	return (
		<div>
			<button
				className={
					name === "All"
						? "bg-gray-300 px-5 py-2 m-2  rounded-lg"
						: "bg-gray-200 px-5 py-2 m-2  rounded-lg hover:bg-gray-300"
				}
			>
				{name}
			</button>
		</div>
	);
};

export default Button;
