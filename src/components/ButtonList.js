import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Gaming",
	"Songs",
	"Comedy",
	"News",
	"Sports",
	"Movies",
	"Education",
	"Science",
];

const ButtonList = () => {
	return (
		<div className="flex">
			{list.map((item, index) => {
				return <Button key={index} name={item} />;
			})}
		</div>
	);
};

export default ButtonList;
