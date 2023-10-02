// https://github.com/wimpywarlord/Practice_web_RTC/blob/master/

// SCRIPT FOR CAPTURING VIDEO USING WEB RTC

function user() {
	console.log("THE CAPTURE VIDEO FUNCTION WAS INITIATED.");
	const constraints = {
		video: true,
		audio: true,
	};
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then((stream) => {
			console.log("Got MediaStream:", stream);
			const videoGrid = document.getElementById("my_video_box");
			const myVideo = document.createElement("video");
			myVideo.muted = true;
			myVideo.srcObject = stream;
			myVideo.addEventListener("loadedmetadata", () => {
				myVideo.play();
			});
			videoGrid.append(myVideo);
		})
		.catch((error) => {
			console.error("Error accessing media devices.", error);
		});
}
// SCRIPT FOR CAPTURING VIDEO USING WEB RTC

// THE PEER JS CODE

var peer = new Peer(1);

peer.on("open", function (id) {
	console.log("My peer ID is: " + id);
	var conn = peer.connect(1);
});

peer.on("connection", function (conn) {
	console.log("SOME ONE IS TRYING TO CONNECT");
});
// THE PEER JS CODE

