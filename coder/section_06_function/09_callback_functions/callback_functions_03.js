// Example of callback in browser

document.getElementsByTagName('body')[0].onclick = function (e)
{
	// we are not obbligated to decalare the event
	console.log('The event occurred')
}