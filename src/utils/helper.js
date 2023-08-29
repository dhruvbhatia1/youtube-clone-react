const nameList = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Eva",
	"Frank",
	"Grace",
	"Hannah",
	"Isaac",
	"Jack",
	"Katie",
	"Liam",
	"Mia",
	"Noah",
	"Olivia",
	"Parker",
	"Quinn",
	"Ryan",
	"Sophia",
	"Tyler",
	"Uma",
	"Violet",
	"William",
	"Xander",
	"Yasmine",
	"Zane",
];

const liveComments = [
	"Great stream!",
	"Nice job!",
	"I love this content!",
	"Can you do a Q&A session?",
	"When is your next live stream?",
	"You're awesome!",
	"Keep up the good work!",
	"I'm a new subscriber!",
	"This is so much fun!",
	"How can I support your channel?",
	"What's your favorite programming language?",
	"This is my first live stream ever!",
	"I just got a new computer!",
	"Do you have any merch?",
	"What's your favorite video you've made?",
	"I can't wait for your next video!",
];

export function generateRandomName() {
	return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomComment() {
	return liveComments[Math.floor(Math.random() * liveComments.length)];
}

export function formatYouTubeViews(number) {
	if (number < 1000) {
		return number.toString(); // No abbreviation for numbers less than 1,000
	} else if (number < 1000000) {
		return (number / 1000).toFixed(1) + "K"; // Abbreviate thousands with one decimal place
	} else if (number < 1000000000) {
		return (number / 1000000).toFixed(1) + "M"; // Abbreviate millions with one decimal place
	} else {
		return (number / 1000000000).toFixed(1) + "B"; // Abbreviate billions with one decimal place
	}
}