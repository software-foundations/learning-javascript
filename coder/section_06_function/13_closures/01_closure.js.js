const x = 'Global'

function outside ()
{
	const x = 'Local'

	function inside ()
	{
		return x
	}

	return inside
}

const myFunction = outside()

// Local
console.log(myFunction())