export const YOUTUBE_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
	process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
	"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_SEARCH_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
	process.env.REACT_APP_GOOGLE_API_KEY +
	"&q=";

export const YOUTUBE_VIDEO_INFO_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
	process.env.REACT_APP_GOOGLE_API_KEY +
	"&id=";

export const OFFSET_LIVE_CHAT = 30;
