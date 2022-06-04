// Simulling the new operator

function VideoClass (name, videoID)
{
	this.name = name
	this.videoID = videoID
}

function myNew(
	constructorFunction,
	...parametersArray)
{
	const obj = {}

	obj.__proto__ = constructorFunction.prototype

	// constructorFunction.apply(<thisObject>)
	constructorFunction.apply(
		obj,
		parametersArray)

	return obj
}

const videoClass03 = myNew (VideoClass, 'Stack', 3)

console.log(videoClass03)
