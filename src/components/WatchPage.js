import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import { formatYouTubeViews } from "../utils/helper";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	const dispatch = useDispatch();
	const [videoInfo, setVideoInfo] = useState(null);

	// const { statistics, snippet } = videoInfo;
	// const { title } = snippet;
	// const { viewCount, likeCount } = statistics;

	useEffect(() => {
		dispatch(closeMenu());
		getVideoInfo();

		return () => dispatch(openMenu());
	}, []);

	const getVideoInfo = async () => {
		const data = await fetch(YOUTUBE_VIDEO_INFO_API + videoId);
		const json = await data.json();
		console.log(json.items[0]);
		setVideoInfo(json.items[0]);
	};

	return (
		<div className="flex flex-col w-full">
			<div className="px-5 flex w-full">
				<div>
					<iframe
						width="850"
						height="500"
						src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-full">
					<LiveChat />
				</div>
			</div>
			{videoInfo && (
				<div className="px-7 py-3">
					<h1 className="text-xl font-bold">{videoInfo?.snippet?.title}</h1>
					<h1 className="mt-2 text-l font-semibold">
						{videoInfo?.snippet?.channelTitle}
					</h1>
					<h1 className="mb-1 font-medium text-sm">
						{formatYouTubeViews(videoInfo?.statistics?.viewCount)} Views
					</h1>
				</div>
			)}
			<CommentsContainer viewCount={videoInfo?.statistics?.commentCount} />
		</div>
	);
};

export default WatchPage;
