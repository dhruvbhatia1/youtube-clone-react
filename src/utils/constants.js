const GOOGLE_API_KEY = "AIzaSyCpAsIS2q41o6uUaEVLXeP6Adc4gh7KltM";

export const YOUTUBE_VIDEOS_API =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
	GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
