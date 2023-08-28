import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchResults = () => {
	const [queryParams] = useSearchParams();
	const [videos, setVideos] = useState([]);
	// console.log(queryParams.get("q"));

	useEffect(() => {
		getVideos();
	}, [queryParams.get("q")]);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEO_SEARCH_API + queryParams.get("q"));
		const json = await data.json();
		// console.log(json.items);
		setVideos(json.items);
	};
	if (videos.length === 0) {
		return <div>Loading...</div>;
	}
	return (
		<div className="flex flex-wrap justify-between">
			{videos.map((video) => {
				if (video.id.kind === "youtube#video") {
					return (
						<Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
							<VideoCard info={video} />
						</Link>
					);
				}
			})}
		</div>
	);
};

export default SearchResults;
