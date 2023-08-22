import React from "react";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
	return (
		<div className="grid grid-flow-col">
			<Sidebar />
			{/* <MainContainer />
			<WatchPage/> */}
			<Outlet/>
		</div>
	);
};

export default Body;
