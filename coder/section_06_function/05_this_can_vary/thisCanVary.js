// on browser

try
{
	function f1() { console.log(this === window) }
	document.getelementsByTagName('body')[0].onclick = function() {f1} // false

	function f2() { console.log(this === document) }
	document.getelementsByTagName('body')[0].onclick = function() {f2} // true

	const f3 = () => console.log(this === window) // true
}
catch(error)
{
	console.log('not in browser')
}

console.log(this)