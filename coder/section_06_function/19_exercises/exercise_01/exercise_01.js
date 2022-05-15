/**
 * 01) Create a function that take 2 values passed by parameters and show in the
 * console the sum, subtraction, multiplication, and the division of these values
*/

/**
 * The proxy makes the error handling
*/

class Operators
{
	static getSumOperator() { return "+" }

	static getSubtractionOperator() { return "-" }

	static getMultiplicationOperator() { return "*" }

	static getDivisionOperator() { return "/" }
}

function tryOperationProxy(number1, number2, operator)
{
	function checkIsNumber(number)
	{
		return typeof number === 'number'
	}

	if ( checkIsNumber(number1) && checkIsNumber(number2) )
	{
		let operationToPerform = `${number1} ${operator} ${number2}`

		let result = eval(operationToPerform)

		if ( result == 'Infinity' )
		{	
			let errorMessage = `Invalid Operation: ${operationToPerform}. May be zero division error`

			throw Error(errorMessage)
		}

		return console.log(result)
	
	}
	else
	{
		let errorMessage = ''

		errorMessage += typeof number1 === 'string' ? 'number1 is string, but expeced to be number\n' : ''

		errorMessage += typeof number2 === 'string' ? 'number2 is string, but expeced to be number\n' : ''

		throw new TypeError(errorMessage)
	}
}


function templateMethod(number1, number2)
{
	tryOperationProxy(number1, number2, Operators.getSumOperator())

	tryOperationProxy(number1, number2, Operators.getSubtractionOperator())

	tryOperationProxy(number1, number2, Operators.getSubtractionOperator())

	tryOperationProxy(number1, number2, Operators.getDivisionOperator())
	
}

function application()
{
	let number1 = 10

	let number2 = 2

	templateMethod(number1, number2)
}

application()