function VideoClass (name, videoID)
{
	this.name = name
	this.videoID = videoID
}

const videoClass01 = new VideoClass('Threads', 0)
const videoClass02 = new VideoClass('Queues', 1)

console.log(videoClass01, videoClass02)