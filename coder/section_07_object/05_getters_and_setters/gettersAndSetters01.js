// underline is a convention to private attributes

const sequency = {
	_value: 1,

	get value()
	{
		return this._value++
	},

	set value(value)
	{
		if (value > this._value)
		{
			this._value = value
		}
	}
}

// 1 2
console.log(sequency.value, sequency.value)

sequency.value = 1000

// 1000 1001
console.log(sequency.value, sequency.value)

sequency.value = 900

// 1002 1003
console.log(sequency.value, sequency.value)