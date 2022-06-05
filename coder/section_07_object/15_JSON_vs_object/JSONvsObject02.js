// Transform JSON -> object
const invalid_json = "{a: 1, b: 2, c: 3}"
const other_invalid_json = "{'a': 1, 'b': 2, 'c': 3}"
const valid_json = '{"a": 1, "b": 2, "c": 3}'
function tryJSONParse(json)
{
	try
	{
		const obj = JSON.parse(json)

		return obj
	}
	catch ( error )
	{
		console.log('Error message: ', error.message)
	}
}

tryJSONParse(invalid_json)
tryJSONParse(other_invalid_json)
console.log(tryJSONParse(valid_json))