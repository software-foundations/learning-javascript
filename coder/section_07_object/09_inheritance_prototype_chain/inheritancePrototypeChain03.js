const car = {
	currentSpeed: 0,
	maxSpeed: 200,
	accelerateMore(delta)
	{
		if (this.currentSpeed + delta <= this.maxSpeed)
		{
			this.currentSpeed += delta
		}
		else
		{
			this.currentSpeed = this.maxSpeed
		}
	},
	status()
	{
		return `${this.currentSpeed}Km/h from ${this.maxSpeed}km\h`
	}
}

const ferrari = {
	model: 'F40',
	maxSpeed: 324 // shading
}

const volvo = {
	model: 'V40',
	status ()
	{
		// shading
		// super is used to call the super object status function
		return `${this.model}: ${super.status()}`
	}
}

function printLine()
{
	console.log('\n----------------\n')
}

// Estabilishing prototype relation
Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

printLine()

volvo.accelerateMore(300)
console.log(volvo.status())

printLine()

ferrari.accelerateMore(300)
console.log(ferrari.status())