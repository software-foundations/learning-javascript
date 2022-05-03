function Car(maxSpeed = 200, incrementSpeed = 5)
{
	// private attribute
	let currentSpeed = 0

	// public method (this.<method>)
	this.accelerate = function ()
	{
		if (currentSpeed + incrementSpeed <= maxSpeed)
		{
			currentSpeed += incrementSpeed
		}
		else
		{
			currentSpeed = maxSpeed
		}
	}

	// other public method
	this.getCurrentSpeed = function ()
	{
		return currentSpeed
	}
}

// Not using parenthesis
// to _uses default params
const fiatUno = new Car

fiatUno.accelerate()

// 5
console.log(fiatUno.getCurrentSpeed())

const ferrari = new Car(350, 20)

ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()

// 60
console.log(ferrari.getCurrentSpeed())