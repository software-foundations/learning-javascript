let compareWithThis = function (param)
{
	console.log(this === param)
}

compareWithThis(global) // true in node
// compareWithThis(window) // true in browser

const obj = {}

compareWithThis = compareWithThis.bind(obj)

compareWithThis(global) // false, cause bind makes this point to obj
compareWithThis(obj) // true, cause bind makes this point to obj